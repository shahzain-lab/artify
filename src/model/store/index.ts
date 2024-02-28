import { configureStore } from '@reduxjs/toolkit'
import navigationSlice from './slices/navigationSlice';
import { apiSlice } from './slices/async/api';
import workspaceSlice from './slices/workspace';

const store = configureStore({
    reducer: {
        navigation: navigationSlice,
        workspace: workspaceSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //    getDefaultMiddleware().concat(apiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export default store