import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  //Handle change to add value to the name
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Passing item to the array
  submitItem = e => {
    e.preventDefault();
    this.setState({
      item: ""
    });
    this.props.addItem(this.state.item);
  };

  //Rendering JSX from
  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          placeholder="Add a to-do"
          onChange={this.handleChange}
          required
        />
        <button>
          <i className="fas fa-2x fa-plus-circle" />
        </button>
      </form>
    );
  }
}

export default TodoForm;
