import React from "react";
import Todo from "Todo";

const TodoList = props => {
  return (
    <div>
      {props.propsArray.map(todo => (
        <Todo propsTodo={todo.task} />
      ))}
    </div>
  );
};

export default TodoList;
