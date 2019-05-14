import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: "",
      id: 1528817077286,
      completed: false
    };
  }

  taskHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <h2>{this.state.task}</h2>
        <input type="text" placeholder="Todo ..." onChange={this.taskHandler} />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
