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
      {props.entries.map((entry, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: '#3B4252',
              color: '#E5E9F0',
              boxShadow: '0 0 #D5F3FE',
              border: '6px solid #E5E9F0',
            }}
            contentArrowStyle={{
              border: '12px solid #E5E9F0',
            }}
            date={entry.date}
            dateClassName="text-content"
            iconStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: entry.icon.backgroundColor,
            }}
            icon={
              <img src={entry.icon.image} style={{ width: '70%' }} alt="Logo" />
            }
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
