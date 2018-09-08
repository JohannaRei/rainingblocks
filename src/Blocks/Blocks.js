import React from 'react';
import Block from './Block';

const Blocks = () => {
  const types = ["l", 'j', "t", 'i'];
  const orientations = ["left", "top", "right", "bottom"];

  return (
    <div>
      {types.map(type => (
        <div style={styles.row}>
          {orientations.map(orientation => (
            <Block
              type={type}
              orientation={orientation}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const styles = {
  row: {
    display: "flex",
    flexDirection: "row"
  }
}

export default Blocks;