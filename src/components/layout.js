import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #0f0f23;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function Layout({ children }) {
  return <Background>{children}</Background>;
}
