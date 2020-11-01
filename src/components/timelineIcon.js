import React from 'react';

export default function TimelineIcon(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        ...styles.iconWrapper,
      }}
    >
      <img src={props.image} style={styles.icon} alt="logo" />
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
