import React from "react";

const Todo = props => {
  return (
    <ul>
      <li onClick={props.propsCompleted}>{props.propsTodo}</li>
    </ul>
  );
};

export default Todo;
