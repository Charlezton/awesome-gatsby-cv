import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import Hero from '../components/hero';

export default function Home({ data }) {
  return (
    <Layout>
      <Hero
        image={data.heroImage.childImageSharp}
        title={data.heroTextContent.title}
        description={data.heroTextContent.description}
        buttonText={data.heroTextContent.buttonText}
      />
      <Timeline
        entries={data.timelineEntries.edges[0].node.childContentJson.entries}
        images={data.allImages.edges}
      />
    </Layout>
  );
}

export const query = graphql`
  query PageContent {
    heroImage: file(relativePath: { eq: "tech.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroTextContent: contentJson {
      title
      description
      buttonText
    }
    allImages: allImageSharp {
      edges {
        node {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
    timelineEntries: allFile(filter: { name: { eq: "timelineEntries" } }) {
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
`;
