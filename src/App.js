import "bulma/css/bulma.css";
import React from "react";
import UserList from "./UserList";

const App = () => {
  return (
    <div className="columns is-flex is-justify-content-center m-2 has-background-grey-light">
      <UserList />
    </div>
  );
};

export default App;
