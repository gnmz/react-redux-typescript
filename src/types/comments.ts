export interface ICommentsState {
  comments: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum CommentsActionType {
  FETCH_COMMENTS = "FETCH_COMMENTS",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
  SET_COMMENTS_PAGE = "SET_COMMENTS_PAGE",
}

interface IFetchCommentsAction {
  type: CommentsActionType.FETCH_COMMENTS;
}

interface IFetchCommentsSuccessAction {
  type: CommentsActionType.FETCH_COMMENTS_SUCCESS;
  payload: any[];
}
interface IFetchCommentsErrorAction {
  type: CommentsActionType.FETCH_COMMENTS_ERROR;
  payload: string;
}
interface ISetCommentsPageAction {
  type: CommentsActionType.SET_COMMENTS_PAGE;
  payload: number;
}

export type CommentsAction =
  | IFetchCommentsAction
  | IFetchCommentsSuccessAction
  | IFetchCommentsErrorAction
  | ISetCommentsPageAction;
