import React from 'react';

import { HomeContainer, SecondContainer } from './styled';
import { Container } from '../../styles/GlobalStyle';
import MyVideo from '../../videos/portfolio.mp4';

export default function Home() {
  return (
    <Container>
      <HomeContainer>
        <h1> Welcome to my portifolio!</h1>
        <video autoPlay loop muted>
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </HomeContainer>
      <SecondContainer>
        <h1> Second Container </h1>
      </SecondContainer>
    </Container>
  );
}
