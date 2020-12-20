import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 4px solid #e5e9f0;
  background-color: #0f0f23;
  height: 50vh;
  width: 100%;
`;

const PortraitWrapper = styled.div`
  display: flex;
  width: 60%;
  max-height: 85%;
  margin-right: 10px;
`;

const Portrait = styled(Img)`
  width: 100%;
  border-radius: 3%;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  width: 20%;
  height: 85%;
  margin-left: 10px;
`;

const Logo = styled(Img)`
  width: 100%;
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
          linkedinLogo: file(relativePath: { eq: "footer/linkedin.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          githubLogo: file(relativePath: { eq: "footer/github.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <FooterWrapper>
          <PortraitWrapper>
            <Portrait fluid={data.footerPortrait.childImageSharp.fluid} />
          </PortraitWrapper>
          <ContactInfoWrapper>
            <Logo fluid={data.linkedinLogo.childImageSharp.fluid} />
            <Logo fluid={data.githubLogo.childImageSharp.fluid} />
          </ContactInfoWrapper>
        </FooterWrapper>
      )}
    />
  );
}
