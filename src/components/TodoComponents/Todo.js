import React from "react";
// import "./Todo.css";

//This a component that takes in the `todo` data and displays the task to the screen.

const Todo = props => {
  return (
    <ul>
      <li
        className={`task${props.item.completed ? " completed" : ""}`} //ternary operation
        onClick={() => props.toggleItem(props.item.id)}
      >
        <p>{props.item.task}</p>
      </li>
    </ul>
  );
};

export default Todo;

//propsCompleted
