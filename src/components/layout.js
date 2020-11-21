import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #2e3440;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function Layout({ children }) {
  return <Background>{children}</Background>;
}
