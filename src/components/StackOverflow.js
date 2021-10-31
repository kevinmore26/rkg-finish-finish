import React, { Component } from "react";

// This is where I check out code from StackOverflow to answer questions.

class StackOverflow extends Component {
  state = {
    randomItem: ["one", "two", "three", "four"],
    clicked: false
  };
  handleClick = () => {
    this.setState(prev => ({
      clicked: true
    }));
  };
  randomizeItem = () => {
    return this.state.randomItem[
      Math.floor(Math.random() * this.state.randomItem.length) + 0
    ];
  };
  render() {
    return (
      <div>
        <p onClick={this.handleClick}>
          {this.state.clicked && this.randomizeItem()} Text1
        </p>
        <p onClick={this.handleClick}>
          {this.state.clicked && this.randomizeItem()} Text2
        </p>
      </div>
    );
  }
}

export default StackOverflow;
