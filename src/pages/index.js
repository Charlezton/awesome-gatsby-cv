import React from 'react';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import Hero from '../components/hero';
import timelineEntries from '../data/timelineEntries';
import heroContent from '../data/heroContent';

export default function Home() {
  return (
    <Layout>
      <Hero
        title={heroContent.title}
        description={heroContent.description}
        buttonText={heroContent.buttonText}
      />
      <Timeline entries={timelineEntries} />
    </Layout>
  );
}
