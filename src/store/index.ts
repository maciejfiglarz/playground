import { configureStore, Middleware } from "@reduxjs/toolkit";
// import thunkMiddleware from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// @ts-ignore
import postsReducer from "./postsSlice";
import createPostReducer from "./createPostSlice";
import singlePostReducer from "./postsSlice";
import commentsReducer from "./commentsSlice";
import userReducer from "./user/userSlice";

const middlewares: Middleware[] = [];

const store = configureStore({
  reducer: {
    posts: postsReducer,
    createPost: createPostReducer,
    singlePost: singlePostReducer,
    comments: commentsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      middlewares as ReturnType<typeof getDefaultMiddleware>
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
