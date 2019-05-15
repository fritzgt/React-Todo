import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const tasklist = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: true
  },
  {
    task: "Finish project",
    id: 1528817084358,
    completed: false
  }
];

const defaultState = {
  todoList: tasklist,
  task: "",
  id: null,
  completed: false
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = defaultState;
  }

  changeHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  // adding the new todo
  propsAddTodo = event => {
    event.preventDefault();

    let newTodo = {
      todoList: tasklist,
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: "",
      id: null,
      completed: false
    });
  };

  // strike over the text to marked as completed
  clickCompletedHandler = event => {
    event.target.style.textDecoration = "line-through";
    event.target.style.color = "red";
    console.log(event);

    // Still working on the functionality
    this.setState({
      completed: true
    });
  };

  // Remove complete tasks
  propsremoveTodo = event => {
    event.preventDefault();
    console.log(event.target);
    // Still working on the functionality
    return this.state.todoList.map((status, index) =>
      status.completed ? console.log(status) : console.log(status)
    );
  };

  render() {
    return (
      <div className="app">
        <h1>Welcome to my Todo app</h1>
        {/* iterate over the array */}

        <TodoList
          propsArray={this.state.todoList}
          propsCompleted={this.clickCompletedHandler}
        />

        {/* form */}
        <TodoForm
          changeHandler={this.changeHandler}
          propsAddTodo={this.propsAddTodo}
          propsremoveTodo={this.propsremoveTodo}
        />
      </div>
    );
  }
}

export default App;
