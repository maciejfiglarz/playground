import {
  createSlice,
  createAsyncThunk,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";

//project imports
import axios from "utils/axios";
// import store from 'store';
import { Comment, Post } from "types";
import { RootState } from "store";
import { comments } from "_mockApis/comments";

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
    addComment: (state, action: PayloadAction<Comment>) => {
      const { payload: comment } = action;
      const { postID } = comment;
      let posts = state.data.posts;
      state.data.posts = posts.map((post) => {
        if (post.id === postID) {
          post.comments.unshift(comment);
        }
        return post;
      });

      //   post.comments.map(comments =>{
      //     const isExist =  comments.find(comment =>)
      // });
      // const post = current(state).data.posts.find((post) => post.id === comment.postID);

      // state.data = [
      //   ...state.data,
      //   {
      //     id: "2",
      //     title: "testowy",
      //     author: "empty",
      //     description: "opis",
      //     imageUrl: "",
      //   },
      // ];
    },

    addReplyComment: (state, action: PayloadAction<Comment>) => {
      const { payload: comment } = action;
      const { postID, parentID } = comment;
      let posts = state.data.posts;
      state.data.posts = posts.map((post) => {
        if (post.id === postID) {
          console.log("post", post.id , postID, post.id === postID);
          // post.comments.unshift(comment);
          post.comments.map((_comment) => {
            // console.log("reply", _comment.id === parentID);
            if (_comment.id === parentID) {
              _comment.replies.unshift(comment);
              console.log(
                "reply",
                _comment.id,
                parentID,
                _comment.id === parentID
              );
            } else {

              // _comment.replies.map((_comment2) => {
              //   console.log("else", current(_comment2));
              //   if (_comment2.id === parentID) {
              //     console.log(
              //       "reply2",
              //       _comment2.id,
              //       parentID,
              //       _comment2.id === parentID
              //     );
              //     _comment2.replies.unshift(comment);
              //   }
              // });


            }
          });
        }
        return post;
      });
    },
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
      state.loading = true;
      state.error = null;
      state.currentRequestId = action.meta.requestId;
    });
    builder.addCase(pagination.fulfilled, (state, action) => {
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
});

export const selectPosts = (state: RootState) => state.posts;

export const { addComment, addReplyComment } = slice.actions;

export default slice.reducer;
