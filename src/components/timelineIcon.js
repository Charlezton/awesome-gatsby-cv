import React from 'react';

export default function TimelineIcon(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        ...styles.timelineIconWrapper,
      }}
    >
      <img src={props.image} style={styles.timelineIcon} alt="logo" />
    </div>
  );
}

const styles = {
  timelineIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: '50%',
  },
  timelineIcon: {
    width: '70%',
  },
};
