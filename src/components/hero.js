import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled(Img)`
  height: 100vh;
  width: 100%;
`;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: NineteenNinetySeven;
  color: #e5e9f0;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 5em;
`;

const Description = styled.p`
  font-size: 2em;
`;

export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query HeroQuery {
          heroImage: file(relativePath: { eq: "hero/tech.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroTextContent: heroJson {
            title
            description
            buttonText
          }
        }
      `}
      render={data => (
        <HeroWrapper>
          <BackgroundImage fluid={data.heroImage.childImageSharp.fluid} />
          <TextContentWrapper>
            <Title>{data.heroTextContent.title}</Title>
            <Description>{data.heroTextContent.description}</Description>
          </TextContentWrapper>
        </HeroWrapper>
      )}
    />
  );
}
