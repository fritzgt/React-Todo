import React from "react";
import "./App.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

//Placeholder array of objects
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
  },
  {
    task: "Go to the GYM",
    id: 1528817084398,
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

  //Save to local storage
  componentWillMount() {
    localStorage.getItem("tasklist") &&
      this.setState({
        tasklist: JSON.parse(localStorage.getItem("tasklist"))
      });
  }

  //Save to local storage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasklist", JSON.stringify(nextState.tasklist));
  }

  //Toggle comleted true/false
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

  //rendering JSX
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>
            <i class="far  fa-lightbulb" />
            Daily To-Do App
          </h1>
        </div>
        <div className="Task-container">
          <TodoForm addItem={this.addTodo} />
        </div>
        <div>
          <TodoList
            propsArray={this.state.tasklist}
            toggleItem={this.toggleItem}
            propsClearCompleted={this.propsClearCompleted}
          />
        </div>
        <footer>
          <a href="https://github.com/fritzgt" target="blank">
            <i className="fab fa-lg fa-github" />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
