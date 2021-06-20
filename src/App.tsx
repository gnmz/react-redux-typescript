import React from "react";

import UserLIst from "./components/UserList";
import TodoList from "./components/TodoList";
import CommentsList from "./components/CommentsList";

const App = () => {
  return <div>
    <UserLIst />
    <hr />
    <TodoList />
    <hr />
    <CommentsList />
  </div>;
};

export default App;
