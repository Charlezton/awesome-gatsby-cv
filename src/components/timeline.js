import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import TimelineEntry from './timelineEntry';
import TimelineIcon from './timelineIcon';
import '../global.css';

export default function Timeline() {
  return (
    <StaticQuery
      query={graphql`
        query TimelineQuery {
          allImages: allImageSharp {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
          timelineEntries: allFile(
            filter: { name: { eq: "timelineEntries" } }
          ) {
            edges {
              node {
                childContentJson {
                  entries {
                    title
                    subtitle
                    description
                    date
                    icon {
                      image
                      backgroundColor
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <VerticalTimeline>
          {data.timelineEntries.edges[0].node.childContentJson.entries.map(
            (entry, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  contentStyle={styles.contentStyle}
                  contentArrowStyle={styles.contentArrowStyle}
                  date={entry.date}
                  style={styles.verticalTimelineElement}
                  icon={
                    <TimelineIcon
                      image={data.allImages.edges.find(
                        image =>
                          image.node.fluid.originalName.indexOf(
                            entry.icon.image
                          ) > -1
                      )}
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
            }
          )}
        </VerticalTimeline>
      )}
    />
  );
}

const styles = {
  verticalTimelineElement: {
    fontFamily: 'NineteenNinetySeven',
    color: '#E5E9F0',
  },
  contentStyle: {
    background: '#3B4252',
    border: '6px solid #E5E9F0',
  },
  contentArrowStyle: {
    borderRight: '18px solid #E5E9F0',
  },
};
