import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const CommentsList: React.FC = () => {
  const { comments, loading, error, limit, page } = useTypedSelector(
    (state) => state.comment
  );
  const { fetchComments, setCommentsPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchComments(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.name}</div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setCommentsPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
