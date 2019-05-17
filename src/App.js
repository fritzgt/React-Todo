import React from "react";
import "./App.css";
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
    id: 1528817084359,
    completed: false
  },
  {
    task: "Finish project",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasklist
    };
  }

  // adding the new todo
  addTodo = item => {
    let newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasklist: [...this.state.tasklist, newTodo]
    });
  };

  // strike over the text to marked as completed
  toggleItem = itemId => {
    this.setState({
      tasklist: this.state.tasklist.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  // Remove complete tasks
  propsClearCompleted = event => {
    event.preventDefault();
    this.setState({
      tasklist: this.state.tasklist.filter(item => !item.completed)
    });
  };

  render() {
    // console.log("render again!");
    return (
      <div className="App">
        <h1> React To-Do </h1>
        <div className="header">
          <TodoForm addItem={this.addTodo} />{" "}
        </div>
        <TodoList
          propsArray={this.state.tasklist}
          toggleItem={this.toggleItem}
          propsClearCompleted={this.propsClearCompleted}
        />
      </div>
    );
  }
}

export default App;
