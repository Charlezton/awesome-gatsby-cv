import React from 'react';

export default function Layout({ children }) {
  return <div styles={styles.layout}>{children}</div>;
}

const styles = {
  layout: {
    backgroundColor: '#2e3440',
    color: 'white',
  },
};
