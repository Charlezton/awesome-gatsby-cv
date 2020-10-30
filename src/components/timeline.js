import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

export default function Timeline(props) {
  return (
    <VerticalTimeline>
      {props.entries.map(entry => {
        return (
          <VerticalTimelineElement
            contentStyle={{
              background: '#66D3FA',
              color: '#0F5298',
              boxShadow: '0 0 #D5F3FE',
              border: '2px solid #0F5298',
            }}
            contentArrowStyle={{
              borderRight: '10px solid #0F5298',
            }}
            date={entry.date}
            dateClassName="text-content"
            iconStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            icon={<img src={entry.icon} style={{ width: '70%' }} alt="Logo" />}
          >
            <h1 className="vertical-timeline-element-title text-content">
              {entry.title}
            </h1>
            <h4 className="vertical-timeline-element-subtitle text-content">
              {entry.subtitle}
            </h4>
            <p className="text-content">{entry.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
