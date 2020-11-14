import React from 'react';
import Img from 'gatsby-image';

export default function TimelineIcon(props) {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        ...styles.iconWrapper,
      }}
    >
      <Img style={styles.icon} fixed={props.image.node.fixed} />
    </div>
  );
}

const styles = {
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: '50%',
  },
  icon: {
    width: '70%',
  },
};
