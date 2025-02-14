import React from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import map from '../../../assets/map.svg';
import card1 from '../../../assets/card1.svg'; 
import card2 from '../../../assets/card2.svg'; 
import tick from '../../../assets/tick.svg'; 

const Wrapper = styled(Box)`
  padding: 220px 0px 80px;
  position:relative;
`;

const ImageContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 50%;
  width: 100%;
  height: auto;
  position:absolute;
  top:80px;
  @media (max-width:799px){
    max-width: 100%;
    top:100px;
  
  }
  @media (max-width:499px){
    max-width: 100%;
    top:100px;
  
  }
`;

const Bgbox = styled(Box)`
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  height: 330px; 
  display: flex;
  flex-direction: column;
`;

const Smart = styled(Grid)`
margin-top: 30px;
background-color: #fff;
border-radius: 15px;
padding: 30px;
justify-content: center;
align-items: center;
text-align: center;
`

const Mainheading = styled(Typography)`
font-size: 72px;
@media (max-width: 720px) {
    font-size: 33px;
  }
`
const Subheading = styled(Typography)`
font-size: 18px;
@media (max-width: 600px) {
    font-size: 17px !important;
  }
`

const Mingrid = styled(Grid)`
  justify-content: center;
  @media (max-width: 900px) {
     justify-content: initial;
     text-align: left;
  }

`;

    


const Spendfreely = () => {
  return (
    <Wrapper id='Features'>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} textAlign="center">
            <ImageContainer>
              <StyledImage src={map} alt="map" />
              <Mainheading
                style={{ color: '#1E2329',  fontWeight: '600', zIndex: 1, marginTop: '-90px' }}>
                Spend freely without touching your real cash
              </Mainheading>
            </ImageContainer>
            <Subheading style={{ color: '#1E2329', marginTop: '20px', fontSize: '18px', maxWidth: '620px', marginLeft: 'auto',
                marginRight: 'auto' }}>
              <span style={{ color: '#F0B90B' }}>Bpay</span> lets you shop anywhere with ease, offering high approval rates for seamless transactions.
            </Subheading>
          </Grid>

          <Grid container spacing={3} justifyContent="center" marginTop={1}>
            <Grid item xs={12} md={6}>
              <Bgbox >
                <img src={card1} alt="Save time and conversion fees" style={{ width: '100%', maxWidth: '60px' }} />
                <Typography variant="h6" fontWeight={600} marginTop={2} sx={{color:'#1E2329',fontSize:'24px'}}>
                  Save time and conversion fees
                </Typography>
                <Typography variant="body1" color='#1E2329' fontSize='17px' maxWidth='434px' >
                  We seamlessly convert between crypto and cash for you—no extra work, no hidden fees. Enjoy effortless payments with ease.
                </Typography>
              </Bgbox>
            </Grid>

            <Grid item xs={12} md={6} >
              <Bgbox  >
                <img src={card2} alt="Accepted everywhere" style={{ width: '100%', maxWidth: '60px' }} />
                <Typography variant="h6" fontWeight={600} marginTop={2} sx={{color:'#1E2329',fontSize:'24px'}}> 
                  Accepted everywhere
                </Typography>
                <Typography variant="body1" color='#1E2329' fontSize='17px' maxWidth='434px' >
                  Use your digital card at any merchant that accepts Visa or Mastercard.
                </Typography>
              </Bgbox>
            </Grid>
          </Grid>
          
          <Smart container>
            {['Instant card creation', 'Smart automation', 'Optimized user experience', 'API-powered system'].map((text, index) => (
              <Mingrid item key={index} xs={12} sm={12} md={6} lg={3} display='flex'>
                <img src={tick} alt="tick" style={{ marginRight: '8px',width:'100%',maxWidth:'21px' }} />
                <Typography variant="body1" fontWeight={600} color='#1E2329' fontSize='18px'>{text}</Typography>
              </Mingrid>
            ))}
          </Smart>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Spendfreely;
