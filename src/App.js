import React, { Component } from 'react';
import Grid from './components/Grid';
import Blocks from './components/Blocks/Blocks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 1000,
    };
  }

  render() {
    const { points } = this.state;
    return (
      <div>
        <Grid size={10} />
        <Blocks />
        <p>{points}</p>
      </div>
    );
  }
}

export default App;
