import React from 'react';
import 'react-vertical-timeline-component/style.min.css';

export default function TimelineEntry(props) {
  return (
    <div style={styles.timelineEntryWrapper}>
      <h1 className="vertical-timeline-element-title">{props.title}</h1>
      <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
      <p>{props.description}</p>
    </div>
  );
}

const styles = {
  timelineEntryWrapper: {
    background: '#3B4252',
  },
};
