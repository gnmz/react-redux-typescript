import * as UserActionCreator from "./user";
import * as TodoActionCreator from "./todo";
import * as CommentsActionCreator from "./comments";

const actionCreator = {
  ...TodoActionCreator,
  ...UserActionCreator,
  ...CommentsActionCreator,
};

export default actionCreator;
