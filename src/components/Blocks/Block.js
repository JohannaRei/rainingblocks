import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shapes from '../../data/shapes';

class Block extends Component {
  renderBlock = () => {
    const { type, orientation } = this.props;
    const { matrix } = shapes[type][orientation];
    const { color } = shapes[type];

    return (
      <table>
        <tbody>
          {this.renderRow(matrix, color)}
        </tbody>
      </table>
    );
  }

  renderRow = (matrix, color) => {
    const { type, orientation } = this.props;

    return matrix.map(item => (
      <tr key={`${type}-${orientation}-row`}>
        {item.map((item2) => {
          if (item2 !== 0) {
            return (
              <td
                key={`${type}-${orientation}-${item}`}
                style={{ ...styles.block, ...styles[color] }}
              >
                {' '}
              </td>
            );
          }
          return <td key={`${type}-${orientation}-${item}`}>{' '}</td>;
        })}
      </tr>
    ));
  }

  render() {
    return (
      <div>
        {this.renderBlock()}
      </div>
    );
  }
}

Block.propTypes = {
  type: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
};

const styles = {
  block: {
    width: '32px',
    height: '32px',
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
  orange: {
    backgroundColor: 'orange',
  },
  purple: {
    backgroundColor: 'purple',
  },
};

export default Block;
