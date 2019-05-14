import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Todo ..."
        onChange={props.changeHandler}
      />
      <button onClick={props.propsAddTodo}>Add Todo</button>
      <button onClick={props.propsremoveTodo}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
