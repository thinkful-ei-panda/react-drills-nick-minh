import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who : 'world'
  };

  handleButtonClick = (word) => {
    this.setState(
      {
        who : word
      }
    )
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button id="world" onClick={() => this.handleButtonClick("world")}>World</button>
        <button id="friend" onClick={() => this.handleButtonClick("friend")}>Friend</button>
        <button id="react" onClick={() => this.handleButtonClick("react")}>React</button>
      </div>
    )
  }



}

export default HelloWorld;