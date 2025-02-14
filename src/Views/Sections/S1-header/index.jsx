import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import visaheader from '../../../assets/visaheader.png'
import { tgLink,gitbook,buypay } from '../../../links';
const Wrapper = styled(Box)`
  padding: 60px 0px;
`;

const Telegram = styled(Button)`
  border: 1px solid #1E2329;
  color: #1E2329;
  padding: 10px 27px;
  border-radius: 5px;
  text-transform: none;
  font-size: 17px;
  @media (max-width: 600px) {
    padding: 6px 8px;
    margin-bottom: 10px;
  }
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
`;

const Gitbook = styled(Button)`
  border: 1px solid #1E2329;
  color: #1E2329;
  padding: 10px 27px;
  border-radius: 5px;
  margin-left: 10px;
  text-transform: none;
  font-size: 17px;
  @media (max-width: 600px) {
    padding: 6px 18px;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
`;

const Buy = styled(Button)`
  background-color: #F0B90B;
  color: #1E2329;
  padding: 10px 29px;
  border-radius: 5px;
  text-transform: none;
  font-size: 17px;
  margin-left: 10px;
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
  @media (max-width: 600px) {
    padding: 6px 18px;
    margin-left: 0px;
    margin-bottom: 50px;
  }
`;
const Buttonbox = styled(Box)`
    @media (max-width: 600px) {
     display: flex;
     flex-direction: column;
  }

`

const Visa = styled('img')`
  width: 100%;
  max-width: 530px;
  height: auto;
`;

const Title = styled(Typography)`
  color: #1E2329;
  font-size: 59px;
  font-weight: 600;
  margin-bottom: 30px;
  max-width: 476px;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Description = styled(Typography)`
  color: #1E2329;
  font-size: 19px;
  margin-bottom: 20px;
  max-width: 550px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <Wrapper id='Home'>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6.5}>
            <Title>
              <span style={{ color: '#F0B90B' }}>Bpay</span> your anonymous card for limitless transactions.
            </Title>
            <Description variant="body1">
              <span style={{ color: '#F0B90B' }}>Bpay</span> is an innovative platform designed to provide seamless and anonymous transactions with a secure, non-KYC virtual card—empowering users with financial freedom and limitless possibilities.
            </Description>
            <Buttonbox display="flex">
              <Telegram href={tgLink}  target="_blank" rel="noopener noreferrer">Telegram</Telegram>
              <Gitbook href={gitbook} target="_blank" rel="noopener noreferrer" >Gitbook</Gitbook>
              <Buy href={buypay} target="_blank" rel="noopener noreferrer" >Buy $Bpay</Buy>
            </Buttonbox>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Visa src={visaheader} alt="Visa header" />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Header;
