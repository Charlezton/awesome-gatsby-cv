import React from 'react';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import entries from '../data/timelineEntries';

export default function Home() {
  return (
    <Layout>
      {/* <Hero/> */}
      <Timeline entries={entries} />
    </Layout>
  );
}
