import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //   console.log({ props });
  return (
    <div>
      {props.propsArray.map(todo => (
        <Todo
          propsCompleted={props.propsCompleted}
          propsTodo={todo.task}
          key={todo.task}
        />
      ))}
    </div>
  );
};

export default TodoList;
