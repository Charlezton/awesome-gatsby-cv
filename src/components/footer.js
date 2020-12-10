import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 4px solid #e5e9f0;
  background-color: #0f0f23;
  height: 50vh;
  width: 100%;
`;

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
`;

const Portrait = styled(Img)`
  height: 100%;
  width: 50%;
  border-radius: 3%;
`;

const TextContentWrapper = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-family: NineteenNinetySeven;
  color: #00cc00;
  text-shadow: 0 0 2px #00cc00;
`;

const Description = styled.p`
  font-family: SourceCodePro;
  color: #00cc00;
  text-shadow: 0 0 2px #00cc00;
`;

const Link = styled.a`
  color: #00cc00;
`;

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query footerQuery {
          footerPortrait: file(relativePath: { eq: "footer/portrait.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <FooterLayout>
          <FooterContentWrapper>
            <Portrait fluid={data.footerPortrait.childImageSharp.fluid} />
            <TextContentWrapper>
              <Title>Get in touch with me</Title>
              <Description>
                <Link href="https://www.linkedin.com/in/carl-elgestad-stjernfeldt-7b23b4b2">
                  LinkedIn
                </Link>
              </Description>
            </TextContentWrapper>
          </FooterContentWrapper>
        </FooterLayout>
      )}
    />
  );
}
