import React from "react";
import Todo from "./Todo";
import "./Todo.css";

//This receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

const TodoList = props => {
  //   console.log({ props });
  return (
    <span>
      <div className="todo-list">
        {props.propsArray.map(item => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
      </div>
      <button className="clear-btn" onClick={props.propsClearCompleted}>
        <i class="fas fa-lg  fa-tasks"> </i>Clear Completed{" "}
      </button>
    </span>
  );
};

export default TodoList;
