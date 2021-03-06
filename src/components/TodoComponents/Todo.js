import React from "react";
import "./Todo.css";

//This a component that takes in the `todo` data and displays the task to the screen.

const Todo = props => {
  return (
    <div
      className={`task${props.item.completed ? " completed" : ""}`} //ternary operation
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>
        <i
          className={`fa-lg ${
            props.item.completed ? " fas fa-check-circle" : " far fa-circle"
          }`}
        />
        {props.item.task}
      </p>
      {/* <i
        className={` fa-lg ${
          props.item.completed ? " fas fa-star" : " far fa-star"
        }`}
      /> */}
    </div>
  );
};

export default Todo;
