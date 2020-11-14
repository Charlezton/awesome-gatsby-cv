import React from 'react';
import Img from 'gatsby-image';

export default function TimelineIcon(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        ...styles.iconWrapper,
      }}
    >
      <Img style={styles.icon} fluid={props.image.node.fluid} />
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
