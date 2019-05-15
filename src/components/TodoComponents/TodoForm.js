import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Todo ..."
        onChange={props.changeHandler}
      />
      <button onClick={props.propsAddTodo}>Add Todo</button>
      <button onClick={props.propsremoveTodo}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
