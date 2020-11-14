import React from 'react';
import Layout from '../components/layout';
import Timeline from '../components/timeline';
import Hero from '../components/hero';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Timeline />
    </Layout>
  );
}
