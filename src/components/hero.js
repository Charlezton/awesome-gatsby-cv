import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
        <div style={styles.hero}>
          <Img
            style={styles.image}
            fluid={data.heroImage.childImageSharp.fluid}
          />
          <div style={styles.textContentWrapper}>
            <h1 style={styles.title}>{data.heroTextContent.title}</h1>
            <p style={styles.description}>{data.heroTextContent.description}</p>
            {/* <button>{data.heroTextContent.buttonText}</button> */}
          </div>
        </div>
      )}
    />
  );
}

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'NineteenNinetySeven',
    color: '#E5E9F0',
    position: 'absolute',
  },
  title: {
    fontSize: '5em',
  },
  description: {
    fontSize: '2em',
  },
  image: {
    height: '100vh',
    width: '100%',
  },
};
