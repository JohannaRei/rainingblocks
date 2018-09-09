import React, { Component } from 'react';
import Grid from './components/Grid';
import Blocks from './components/Blocks/Blocks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 1000,
      time: 0,
      currentBlock: '',
    };
    this.blocks = ['l', 'j', 't', 'i', 'o', 's', 'z'];
  }

  componentDidMount() {
    this.generateRandomBlock();
    this.startTimer();
  }

  generateRandomBlock = () => {
    const currentBlock = this.blocks[Math.floor(Math.random() * this.blocks.length)];
    this.setState({ currentBlock });
  }

  startTimer = () => {
    setInterval(() => this.setState(state => ({ time: state.time + 1 })), 1000);
  }

  render() {
    const { currentBlock, time } = this.state;
    return (
      <div>
        <Grid size={10} />
        <Blocks />
        <p>{currentBlock}</p>
        <p>{time}</p>
      </div>
    );
  }
}

export default App;
