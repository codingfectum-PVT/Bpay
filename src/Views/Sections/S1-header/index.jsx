import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
import { tgLink, gitbook, buypay } from '../../../links';
import bpayVideo3 from '../../../assets/bpayvedio.mp4';

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

const BlurOverlay = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 13%; 
  background: linear-gradient(
    to bottom,
    rgba(245, 245, 245, 0) 0%,    
    rgba(245, 245, 245, 0.212) 50%,
    #f5f5f5f1 100%                 
  );
  z-index: 1;

  @media (max-width: 1024px) {
    height: 18%;
    background: linear-gradient(
      to bottom,
      rgba(245, 245, 245, 0) 0%,
      rgba(245, 245, 245, 0.364) 70%,
      #f5f5f5 100%
    );
  }

  @media (max-width: 768px) {
    height: 16%;
  }

  @media (max-width: 480px) {
    height: 14%;
  }
`;

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 30px;
`;

const Title = styled(Typography)`
  color: #FFFFFF;
  font-size: 59px;
  line-height: normal;
  font-weight: 600;
  margin-bottom: 30px;
  max-width: 610px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 57px;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    display: contents;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 8px;

  &:hover {
    transform: translateY(-12px);
  }
`;

const Telegram = styled(StyledButton)`
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  text-transform: none;

  &:hover {
    background-color: #1E2329;
    color: #F0B90B;
  }
`;

const Gitbook = styled(StyledButton)`
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  text-transform: none;

  &:hover {
    background-color: #1E2329;
    color: #F0B90B;
  }
`;

const Buy = styled(StyledButton)`
  background-color: #F0B90B;
  color: #1E2329;
  font-weight: 600;
  text-transform: none;

  &:hover {
    background-color: #1E2329;
    color: #F0B90B;
  }
`;

const Header = () => {
  return (
    <Wrapper id="Home">
      <VideoBackground autoPlay loop muted playsInline>
        <source src={bpayVideo3} type="video/mp4" />
      </VideoBackground>
      <BlurOverlay />
      <ContentContainer maxWidth="lg">
        <Title>
          Bpay your <span style={{ color: '#F0B90B' }}>anonymous card</span> for limitless transactions.
        </Title>
        <ButtonBox>
          <Telegram href={tgLink} target="_blank" rel="noopener noreferrer">Telegram</Telegram>
          <Gitbook href={gitbook} target="_blank" rel="noopener noreferrer">Gitbook</Gitbook>
          <Buy href={buypay} target="_blank" rel="noopener noreferrer">Buy $BPAY</Buy>
        </ButtonBox>
      </ContentContainer>
    </Wrapper>
  );
};

export default Header;
