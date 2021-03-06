import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Timeline from '../components/timeline';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Footer />
    </Layout>
  );
}
