import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import Hero from '../components/hero';
import timelineEntries from '../content/timelineEntries';

export default function Home({ data }) {
  return (
    <Layout>
      <Hero
        image={data.file.heroImage}
        title={data.heroTextContent.title}
        description={data.heroTextContent.description}
        buttonText={data.heroTextContent.buttonText}
      />
      <Timeline entries={timelineEntries} />
    </Layout>
  );
}

export const query = graphql`
  query HeroContent {
    file(relativePath: { eq: "tech.jpg" }) {
      heroImage: childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
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
  }
`;
