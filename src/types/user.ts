export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUserAction {
  type: UserActionType.FETCH_USERS;
}

interface IFetchUserSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUserErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | IFetchUserAction
  | IFetchUserSuccessAction
  | IFetchUserErrorAction;
