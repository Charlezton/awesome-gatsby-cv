import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import TimelineEntry from './timelineEntry';
import TimelineIcon from './timelineIcon';
import '../global.css';

export default function Timeline(props) {
  return (
    <VerticalTimeline>
      {props.entries.map((entry, index) => {
        return (
          <VerticalTimelineElement
            key={index}
            contentStyle={styles.contentStyle}
            contentArrowStyle={styles.contentArrowStyle}
            date={entry.date}
            style={styles.verticalTimelineElement}
            icon={
              <TimelineIcon
                image={entry.icon.image}
                backgroundColor={entry.icon.backgroundColor}
              />
            }
          >
            <TimelineEntry
              title={entry.title}
              subtitle={entry.subtitle}
              description={entry.description}
            />
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

const styles = {
  verticalTimelineElement: {
    fontFamily: 'NineteenNinetySeven',
  },
  contentStyle: {
    background: '#3B4252',
    color: '#E5E9F0',
    boxShadow: '0 0 #D5F3FE',
    border: '6px solid #E5E9F0',
  },
  contentArrowStyle: {
    border: '12px solid #E5E9F0',
  },
};
