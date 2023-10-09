import {configureStore} from '@reduxjs/toolkit'
import gameModeReducer from "./game-mode";
import fieldReducer from "./field";

export const store = configureStore({
  reducer: {
    gameMode: gameModeReducer,
    field1: fieldReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch