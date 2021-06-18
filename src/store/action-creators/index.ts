import * as UserActionCreator from "./user";
import * as TodoActionCreator from "./todo";

const actionCreator = {
  ...TodoActionCreator,
  ...UserActionCreator,
};

export default actionCreator;