import React from 'react';
import styled from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';

const TimelineEntryWrapper = styled.div`
  background: '#3B4252';
`;

export default function TimelineEntry(props) {
  return (
    <TimelineEntryWrapper>
      <h1 className="vertical-timeline-element-title">{props.title}</h1>
      <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
      <p>{props.description}</p>
    </TimelineEntryWrapper>
  );
}
