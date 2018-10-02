import React, { Component } from "react";

class Test extends Component {
  state = { title: "", body: "" };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  };

  /*
  componentWillReceiveProps = (nextProps, nextState) => {
    // depricate use gdsfp
  };
  */

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return prevState;
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
