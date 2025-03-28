import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import tg from '../../../assets/tg.svg';
import x from '../../../assets/x.svg';
import { tgLink,xLink } from '../../../links';
const Wrapper = styled(Box)`
  padding: 80px 0px;
`;
const Heading = styled(Typography)`
color: #1E2329;
font-weight: 600;
font-size: 64px;
margin-bottom: 10px;
@media (max-width: 720px) {
    font-size: 33px;
  }
`
const Discription = styled(Typography)`
font-size: 18px;
color: #1E2329;
max-width: 664px;
margin-left: auto;
margin-right: auto;
@media (max-width: 600px) {
    font-size: 17px !important;
  }
`
const Bgbox = styled(Box)`
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  height: 240px; 
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
   justify-content: center;
   text-align: center;
   align-items: center;
  }
`;
const Cardbutton = styled(Button)`
border-radius: 5px;
background: #F0B90B;
  color: #1E2329;
  padding: 10px 9px;
  border-radius: 5px;
  text-transform: none;
  font-size: 17px;
  width: 107px;
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
  @media (max-width: 600px) {
 padding: 11px 18px;
 width: 126px;
   
  }
`


const Socialmedia = () => {
  return (
    <Wrapper>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} textAlign='center'>
            <Heading data-aos="fade-up">Follow Bpay on social media</Heading>
            <Discription data-aos="fade-up">Keep up with the latest announcements from Bpay, including $BPAY's future, exchange listings, product announcements etc.</Discription>
          </Grid>

          <Grid container spacing={3} justifyContent="center" marginTop={1} data-aos="fade-up">
            <Grid item xs={12} md={6}>
              <Bgbox >
                <img src={tg} alt="Save time and conversion fees" style={{ width: '100%', maxWidth: '65px' }} draggable="false" />
                <Typography variant="h6" fontWeight={600} marginTop={2} mb={2} sx={{color:'#1E2329',fontSize:'24px'}}>
                Join our Telegram Community
                </Typography>
                <Cardbutton href={tgLink}  target="_blank" rel="noopener noreferrer">Join us</Cardbutton>
              </Bgbox>
            </Grid>

            <Grid item xs={12} md={6} >
              <Bgbox  >
                <img src={x} alt="Accepted everywhere" style={{ width: '100%', maxWidth: '65px' }}  draggable="false" />
                <Typography variant="h6" fontWeight={600} marginTop={2} mb={2} sx={{color:'#1E2329',fontSize:'24px'}}> 
                X (formerly Twitter)
                </Typography>
                <Cardbutton href={xLink}target="_blank" rel="noopener noreferrer" >Follow us</Cardbutton>
              </Bgbox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Socialmedia