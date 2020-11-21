import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 50%;
`;

const Icon = styled(Img)`
  width: 70%;
`;

export default function TimelineIcon(props) {
  return (
    <IconWrapper
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <Icon fluid={props.image.childImageSharp.fluid} />
    </IconWrapper>
  );
}
