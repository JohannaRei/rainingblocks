import React, { Component } from 'react';
import shapes from './shapes';

class Block extends Component {
  renderBlock = () => {
    const { type, orientation } = this.props;
    const matrix = shapes[type][orientation];
    const color = shapes[type].color;

    return (
      <table>
        <tbody>
          {this.renderRow(matrix, color)}
        </tbody>
      </table>
    );
  }

  renderRow = (matrix, color) => {
    return matrix.map((item, i) => {
      return (
        <tr key={i}>
          {item.map((item2, i) => {
            if (item2 !== 0) {
              return <td key={i} style={{ ...styles.block, ...styles[color] }}></td>
            } else {
              return <td key={i}></td>
            }
          })}
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBlock()}
      </div>
    );
  }
};

const styles = {
  block: {
    width: "32px",
    height: "32px",
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  },
  orange: {
    backgroundColor: 'orange'
  }
}

export default Block;