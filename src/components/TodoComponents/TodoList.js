import React from "react";
import Todo from "./Todo";
// import "./Todo.css";

//This receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

const TodoList = props => {
  //   console.log({ props });
  return (
    <div className="todo-list">
      {" "}
      {props.propsArray.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}{" "}
      <button className="clear-btn" onClick={props.propsClearCompleted}>
        <i class="far fa-lg fa-times-circle"> </i>Clear Completed{" "}
      </button>{" "}
    </div>
  );
};

export default TodoList;
