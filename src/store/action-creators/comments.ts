import axios from "axios";
import { Dispatch } from "react";
import { CommentsAction, CommentsActionType } from "../../types/comments";

export const fetchComments = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({ type: CommentsActionType.FETCH_COMMENTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({
          type: CommentsActionType.FETCH_COMMENTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: CommentsActionType.FETCH_COMMENTS_ERROR,
        payload: "Произошла ошибка при загрузке комментариев",
      });
    }
  };
};

export const setCommentsPage = (page: number): CommentsAction => {
  return { type: CommentsActionType.SET_COMMENTS_PAGE, payload: page };
};