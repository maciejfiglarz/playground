import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//project imports
import axios from 'utils/axios';
// import store from 'store';
import { Post } from 'types';
import { RootState } from 'store';

interface PostsSliceState {
    data: Post[];
    loading: boolean;
    currentRequestId: string | undefined;
    error: any;
}

const initialState: PostsSliceState = {
    data: [],
    loading: false,
    currentRequestId: undefined,
    error: null
};

export const pagination = createAsyncThunk(
    'posts/pagination',
    async ({ page }: { page: number }) => {
        const { data } = await axios.get(`api/posts`);
        return data.posts as Post[];
    }
);

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
        builder.addCase(pagination.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(pagination.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                state.data = [...state.data, ...action.payload];
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(pagination.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.currentRequestId = undefined;
        });
    }
});

export const selectPosts = (state: RootState) => state.posts;

// export const { addTodo, removeTodo } = slice.actions;

export default slice.reducer;
