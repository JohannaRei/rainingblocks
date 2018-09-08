import React, { Component } from 'react';

class Grid extends Component {
  renderGrid = (size) => {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      const arr = new Array(size).fill();
      matrix.push(arr);
    }

    return (
      <table>
        <tbody>
          {matrix.map((item, i) => this.renderRow(item, i))}
        </tbody>
      </table>
    );
  }

  renderRow = (arr, i) => {
    return (
      <tr key={i}>
        {arr.map((item, i) => <td key={i} style={styles.cell}></td>)}
      </tr>
    )
  }

  render() {
    const { size } = this.props;
    return (
      <div>
        {this.renderGrid(size)}
      </div>
    );
  }
}

const styles = {
  cell: {
    width: "30px",
    height: "30px",
    borderWidth: "2px",
    borderColor: "black",
    borderStyle: "solid",
    margin: 0
  }
}

export default Grid;