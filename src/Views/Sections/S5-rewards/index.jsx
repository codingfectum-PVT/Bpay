import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import rewards from '../../../assets/rewards.svg';
import { buypay,learnmore } from '../../../links';
const Wrapper = styled(Box)`
  padding: 0px 0px;
`;
const Buy = styled(Button)`
border-radius: 5px;
background: #F0B90B;
  color: #1E2329;
  padding: 10px 29px;
  border-radius: 5px;
  text-transform: none;
  font-size: 17px;
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
  @media (max-width: 899px) {
 padding: 11px 18px;
 margin-bottom: 10px;
   
  }
`
const Learn = styled(Button)`
  border-radius: 5px;
  border: 1px solid #000;
  color: #1E2329;
  padding: 9px 27px;
  border-radius: 5px;
  text-transform: none;
  font-size: 17px;
  margin-left: 10px;
  @media (max-width: 899px) {
    padding:11px 12px;
    margin-left: 0px;
  }
  :hover {
    background-color: #1E2329;
    color:#F0B90B ;
  }
`
const Main = styled(Grid)`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  @media (max-width: 900px) {
    text-align: center;
   
  }

`;
const Boxwrapper =styled(Box)`
    @media (max-width: 900px) {
    text-align: center;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
  }  
`
const Discription = styled(Typography)`
color: #1E2329;
max-width: 493px;
margin-bottom: 20px;
font-size: 18px;
@media (max-width: 900px) {
   margin-left: auto;
   margin-right: auto;
   font-size: 14px;
  }  
`
const Heading = styled(Typography)`
   color:#1E2329;
   font-size: 60px;
   margin-bottom: 20px;
   @media (max-width: 1024px) {
   font-size: 50px ;
  }  

`  


const Rewards = () => {
  return (
    <Wrapper>
        <Container maxWidth='lg'>
            <Grid container data-aos="fade-up" >
            <Main item container  >
                <Grid item xs={12} md={6} >
                    <img src={rewards} alt='rewards' style={{width:'100%',maxWidth:'420px',height:'auto',}} draggable="false"  />
                </Grid>
                  <Grid item xs={12} md={6} mb={5}>
                <Typography style={{color:'#F0B90B' ,fontSize:'24px',fontWeight:'600'}}>Passive income</Typography>
                <Heading fontWeight='600'>50% BUSD rewards</Heading>
                <Discription><span style={{color:'#F0B90B'}}>$BPAY</span> holders earn 50% of the revenue from card sales and top-ups, rewarded in BUSD for a stable and seamless passive income.</Discription>
                <Boxwrapper display='flex'>
                 <Buy href={buypay} target="_blank" rel="noopener noreferrer">Buy $BPAY </Buy>
                  <Learn href={learnmore} target="_blank" rel="noopener noreferrer">Learn more</Learn>
                </Boxwrapper>
            </Grid>
            </Main>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Rewards