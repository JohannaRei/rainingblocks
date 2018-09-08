import React, { Component } from 'react';
import Grid from './Grid';
import Blocks from './Blocks/Blocks';

class App extends Component {
  render() {
    return (
      <div>
        <Grid size={10} />
        <Blocks />
      </div>
    );
  }
}

export default App;
