import React from 'react';
import Layout from '../components/layout';
import Timeline from '../components/timeline';

const entries = [
  {
    title: 'Ruby... my first love',
    subtitle: 'Senior highschool',
    description: 'awdawdawd',
    date: '2010',
    icon: '/images/ruby.png',
  },
  {
    title: 'BA in computer science',
    subtitle: 'Stockholm University',
    description: 'awdawdawd',
    date: '2011-2015',
  },
  {
    title: 'IT-Support',
    subtitle: 'Viktor Rydberg Djursholm',
    description: 'awdawdawd',
    date: '2013-2014',
  },
  {
    title: 'Developer',
    subtitle: 'SWECO',
    description: 'awdawdawd',
    date: '2015',
  },
  {
    title: 'Senior Developer',
    subtitle: 'Digitalent',
    description: 'awdawdawd',
    date: '2019',
  },
  {
    title: 'Tech Lead',
    subtitle: 'Mindler',
    description: 'awdawdawd',
    date: '2021-present',
  },
];

export default function Home() {
  return (
    <Layout>
      <Timeline entries={entries} />
    </Layout>
  );
}
