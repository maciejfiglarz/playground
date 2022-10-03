import { configureStore, Middleware } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// @ts-ignore
import postsReducer from './postsSlice';
import singlePostReducer from './postsSlice';
import commentsReducer from './commentsSlice';
import accountReducer from './acccoutSlice';

const middlewares: Middleware[] = [];

const store = configureStore({
    reducer: {
        posts: postsReducer,
        singlePost: singlePostReducer,
        comments: commentsReducer,
        account: accountReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            middlewares as ReturnType<typeof getDefaultMiddleware>
        )
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
