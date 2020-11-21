import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
`;

const Icon = styled(Img)`
  width: 70%;
`;

export default function TimelineIcon(props) {
  return (
    <IconWrapper backgroundColor={props.backgroundColor}>
      <Icon fluid={props.image.childImageSharp.fluid} />
    </IconWrapper>
  );
}
