import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    word: ""
  };

  componentDidMount() {
    const sec = 1000;
    this.glasses = setInterval(() => {
      this.setState({
        count: this.state.count + 1

      }, () => this.checkWord())
    }, sec)
  }

  componentWillUnmount() {
    clearInterval(this.glasses);
  }

  checkWord() {
    if (this.state.count % 8 === 0) {
      this.setState({
        word: 'Boom!'
      })
      clearInterval(this.glasses);
    } else if (this.state.count % 2 === 0) {
      this.setState({
        word: 'tick'
      })
    } else {
      this.setState({
        word: 'tock'
      })
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.word}</p>
      </div>
    )
  }
}

export default Bomb;