import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

//project imports
import axios from "utils/axios";
// import store from 'store';
import { Post } from "types";
import { RootState } from "store";

type PostsData = {
  posts: Post[];
  // pageTotal: number;
  total: number;
};

interface PostsState {
  data: PostsData;
  loading: boolean;
  currentRequestId: string | undefined;
  error: any;
}

const initialState: PostsState = {
  data: {
    posts: [],
    total: 0,
    // pageTotal: 0,
  },
  loading: false,
  currentRequestId: undefined,
  error: null,
};

export const pagination = createAsyncThunk(
  "posts/pagination",
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`api/posts`);
      console.log("posts", data);
      return { posts: data.posts, total: data.total };
      // return data.posts as Post[];
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// export const pagination = createAsyncThunk(
//   "posts/pagination",
//   async ({ page }: { page: number }, { rejectWithValue }) => {
//     try {
//       const { data } = await axiosApi.get(
//         `post/pagination/limit-4/page-${page}`
//       );
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<string>) => {
    //     state.data = [
    //         ...state.data,
    //         {
    //             id: '2',
    //             title: 'testowy',
    //             author: 'empty',
    //             description: 'opis',
    //             imageUrl: ''
    //         }
    //     ];
    // },
    // removeTodo: (state, action: PayloadAction<number>) => {
    //     // state.data = state.data.filter(({ id }) => id !== action.payload);
    // }
  },

  extraReducers: (builder) => {
    builder.addCase(pagination.pending, (state, action) => {
      if (!state.loading) {
        state.loading = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(pagination.fulfilled, (state, action) => {
      console.log("loading", action, action.payload);
      const prevPosts = current(state).data.posts;
      const { posts, total } = action.payload;

      state.loading = false;
      state.data = {
        posts: [...posts, ...prevPosts],
        total,
      };
      state.currentRequestId = undefined;
    });
    builder.addCase(pagination.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.currentRequestId = undefined;
    });
  },

  // extraReducers: (builder) => {
  //   builder.addCase(pagination.pending, (state, action) => {
  //     if (!state.loading) {
  //       state.loading = true;
  //       state.error = null;
  //       state.currentRequestId = action.meta.requestId;
  //     }
  //   });
  //   builder.addCase(pagination.fulfilled, (state, action) => {
  //     const { requestId } = action.meta;
  //     const prevResults = current(state).data.results;
  //     const results = action.payload.results;

  //     console.log("action", current(state));

  //     //   console.log("action", action.payload, {
  //     //     ...state,
  //     //     data: { ...action.payload, results: { ...results, ...prevResults } },
  //     //   });

  //     if (state.loading && state.currentRequestId === requestId) {
  //       state.loading = false;
  //       state.data = {
  //         ...action.payload,
  //         results: [...results, ...prevResults],
  //       };
  //       state.currentRequestId = undefined;
  //     }
  //   });
  //   builder.addCase(pagination.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.error;
  //     state.currentRequestId = undefined;
  //   });
  // },
});

export const selectPosts = (state: RootState) => state.posts;

// export const { addTodo, removeTodo } = slice.actions;

export default slice.reducer;
