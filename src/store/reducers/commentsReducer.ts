import {
  CommentsAction,
  CommentsActionType,
  ICommentsState,
} from "../../types/comments";

const initialState: ICommentsState = {
  comments: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const commentsReducer = (
  state = initialState,
  action: CommentsAction
): ICommentsState => {
  switch (action.type) {
    case CommentsActionType.FETCH_COMMENTS:
      return { ...state, loading: true };
    case CommentsActionType.FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case CommentsActionType.FETCH_COMMENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CommentsActionType.SET_COMMENTS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
