import React from "react";

import UserLIst from "./components/UserList";
import TodoList from "./components/TodoList";

const App = () => {
  return <div>
    <UserLIst />
    <hr />
    <TodoList />
  </div>;
};

export default App;
