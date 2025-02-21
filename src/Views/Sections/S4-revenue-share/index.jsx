import React from 'react'
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import cardshare from '../../../assets/cardshare.svg'
import { buypay,learnmore } from '../../../links';

const Wrapper = styled(Box)`
  padding: 50px 0px 30px;
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
max-width: 479px;
margin-bottom: 12px;
font-size: 18px;
@media (max-width: 900px) {
   margin-left: auto;
   margin-right: auto;
   font-size: 14px;
  }  
`
const Heading = styled(Typography)`
   color:#1E2329;
   
   font-size: 63px;
   margin-bottom: 10px;
   @media (max-width: 900px) {
   font-size: 51px;
  }  

`  



const Revenueshare = () => {
  return (
    <Wrapper id='Revenueshare'>
        <Container maxWidth="lg">
            <Grid container >
                <Main item container xs={12} data-aos="fade-up">
                  
                        <Grid item xs={12} md={6} mb={5 } >
                            <Typography style={{color:'#F0B90B' ,fontSize:'24px',fontWeight:'600'}}>Revenue share</Typography>
                            <Heading fontWeight='600'>Earn for life</Heading>
                            <Discription>By simply being a <span style={{color:'#F0B90B'}}>$BPAY</span> holder, you automatically qualify for a share of the revenue generated from every card sold, allowing you to passively earn as the platform grows.</Discription>
                            <Boxwrapper display='flex'>
                                <Buy href={buypay} target="_blank" rel="noopener noreferrer">Buy $BPAY </Buy>
                                <Learn href={learnmore} target="_blank" rel="noopener noreferrer">Learn more</Learn>
                            </Boxwrapper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <img src={cardshare} alt="Card share" style={{width:'100%',maxWidth:'550px',height:'auto',}} />
                        </Grid>
                </Main>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Revenueshare