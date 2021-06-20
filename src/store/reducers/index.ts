import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  comment: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
