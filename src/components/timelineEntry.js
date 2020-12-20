import React from 'react';
import styled from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';

const TimelineEntryWrapper = styled.div`
  background: '#3B4252';
`;

const Title = styled.h1`
  font-family: NineteenNinetySeven;
  margin-bottom: 13px;
  color: #e5e9f0;
  text-shadow: 0 0 2px #00cc00;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.h4`
  font-family: NineteenNinetySeven;
  color: #e5e9f0;
  text-shadow: 0 0 1px #00cc00;
`;

const Description = styled.p`
  font-family: SourceCodePro;
  color: #e5e9f0;
  text-shadow: 0 0 2px #00cc00;
`;

export default function TimelineEntry(props) {
  return (
    <TimelineEntryWrapper>
      <Title className="vertical-timeline-element-title">{props.title}</Title>
      <SubTitle className="vertical-timeline-element-subtitle">
        {props.subtitle}
      </SubTitle>
      <Description>{props.description}</Description>
    </TimelineEntryWrapper>
  );
}
