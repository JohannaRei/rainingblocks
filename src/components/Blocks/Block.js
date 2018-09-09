import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shapes from '../../data/shapes';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      matrix: [],
      color: '',
    };
  }

  componentWillMount() {
    const { type, orientation } = this.props;
    const id = Math.floor(Math.random() * 1000);
    this.setState({
      matrix: shapes[type][orientation].matrix,
      color: shapes[type].color,
      id,
    });
  }

  renderBlock = () => {
    const { matrix, color, id } = this.state;

    return (
      matrix.map(item => (
        <tr key={`${id}-${Math.random()}`}>
          {item.map((item2) => {
            if (item2 !== 0) {
              return (
                <td
                  key={`${id}-${Math.random()}`}
                  style={{ ...styles.block, ...styles[color] }}
                >
                  {' '}
                </td>
              );
            }
            return <td key={`${id}-${Math.random()}`}>{' '}</td>;
          })}
        </tr>
      ))
    );
  }

  render() {
    return (
      <table>
        <tbody>
          {this.renderBlock()}
        </tbody>
      </table>
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
  yellow: {
    backgroundColor: 'yellow',
  },
  grey: {
    backgroundColor: 'grey',
  },
};

export default Block;
