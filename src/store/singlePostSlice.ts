import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//project imports
import axios from 'utils/axios';
// import store from 'store';
import { Post } from 'types';
import { RootState } from 'store';

interface SinglePostSliceState {
    post: Post | null;
    loading: boolean;
    currentRequestId: string | undefined;
    error: any;
}

const initialState: SinglePostSliceState = {
    post: null,
    loading: false,
    currentRequestId: undefined,
    error: null
};

export const fetchById = createAsyncThunk(
    'posts/fetch-by-id',
    async (id: string) => {
        const { data } = await axios.get(`api/post=${id}`);
        return data.posts as Post[];
    }
);

export const addPost = createAsyncThunk('posts/add', async (payload: Post) => {
    const { data } = await axios.post(`api/posts/add`, payload);
    return data as Post;
});

export const slice = createSlice({
    name: 'posts',
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
        builder.addCase(fetchById.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(fetchById.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                // state.data = [...state.data, ...action.payload];
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(fetchById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.currentRequestId = undefined;
        });

        builder.addCase(addPost.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });

        builder.addCase(addPost.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                // state.data = [...state.data, ...action.payload];
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.currentRequestId = undefined;
        });
    }
});

export const selectPost = (state: RootState) => state.singlePost;

// export const { addTodo, removeTodo } = slice.actions;

export default slice.reducer;
