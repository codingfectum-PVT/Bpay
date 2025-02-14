import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import wallet from '../../../assets/wallet.svg';
import visa from '../../../assets/visa.svg';
import master from '../../../assets/master.svg';
import gpay from '../../../assets/gpay.svg';



const Wrapper = styled(Box)`
  padding: 120px 0px;
`;
const Heading =styled(Typography)`
 color: #1E2329;
text-align: center;
font-size: 63px;
font-weight: 600;
margin-bottom: 20px;
@media (max-width: 700px) {
    font-size: 33px;
  }
`
const Discription = styled(Typography)`
color: #1E2329;
text-align: center;
font-size: 18px;
font-weight: 400;
max-width: 658px;
margin-right: auto;
margin-left: auto;
@media (max-width: 600px) {
    font-size: 16px;
  }
`


const Serviceprovider = () => {
  return (
     <Wrapper>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} justifyContent='center' textAlign='center'>
                    <Heading>Payment service provider</Heading>
                    <Discription>Integrate service demands and expand channels, incorporating cryptocurrency as a new payment method, ensuring smooth and unrestricted fund transfers.</Discription>
                    <Box display='flex' alignContent='center' justifyContent='center' mt={3}>
                        <img src={gpay} alt='gpay' style={{width:'100%',maxWidth:'68px',height:'auto',marginRight:'10px'}}/>
                        <img src={wallet} alt='gpay' style={{width:'100%',maxWidth:'68px',height:'auto',marginRight:'10px'}}/>
                        <img src={visa} alt='gpay' style={{width:'100%',maxWidth:'68px',height:'auto',marginRight:'10px'}}/>
                        <img src={master} alt='gpay' style={{width:'100%',maxWidth:'68px',height:'auto',marginRight:'10px'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     </Wrapper>
  )
}

export default Serviceprovider