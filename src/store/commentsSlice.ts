//project imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { APIurl } from 'config';
import { Comment } from 'types';

interface CommentssSliceState {
    recent: Comment[];
    loading: boolean;
    currentRequestId: string | undefined;
    error: any;
}

const initialState: CommentssSliceState = {
    recent: [],
    loading: false,
    currentRequestId: undefined,
    error: null
};

export const fetchRecent = createAsyncThunk('comments/pagination', async () => {
    const response = await fetch(`${APIurl}/comments?_page=1&_limit=7`);
    return (await response.json()) as Comment[];
});

export const slice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecent.pending, (state, action) => {
            if (!state.loading) {
                state.loading = true;
                state.error = null;
                state.currentRequestId = action.meta.requestId;
            }
        });
        builder.addCase(fetchRecent.fulfilled, (state, action) => {
            const { requestId } = action.meta;
            if (state.loading && state.currentRequestId === requestId) {
                state.loading = false;
                state.recent = action.payload;
                state.currentRequestId = undefined;
            }
        });
        builder.addCase(fetchRecent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.currentRequestId = undefined;
        });
    }
});

export const selectRecentComments = (state: RootState) => state.comments;

// export const { addTodo, removeTodo } = slice.actions;

export default slice.reducer;
