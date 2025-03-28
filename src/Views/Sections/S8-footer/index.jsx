import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import logo from '../../../assets/logo.svg'
import footerx from '../../../assets/footerx.svg';
import footertg from '../../../assets/footertg.svg';
import { tgLink,xLink,CA } from '../../../links';

const Wrapper = styled(Box)`
  padding: 80px 0px;
  background: #FFF;
  @media (max-width: 899px) {
    text-align: left;
  }
`;
const Socail = styled(Box)`
display: flex;
@media (max-width: 899px) {
   justify-content: left;
  }
`


const Footer = () => {
  return (
    <Wrapper>
        <Container maxWidth='lg'>
            <Grid container spacing={4} justifyContent='space-between'>
                <Grid item xs={12} md={4}>
                    <img src={logo} alt='logo' style={{width:'100%',maxWidth:'140px',height:'auto'}}  draggable="false"/>
                    <Typography style={{color:'#1E2329',fontSize:'18px',marginTop:'20px',textTransform:'none',marginBottom:'20px'}}>your anonymous card for limitless transactions.</Typography>
                    <Socail >
                         <a href={tgLink} target="_blank" rel="noopener noreferrer">
                        <img src={footertg} alt='footer' style={{width:'100%',maxWidth:'50px',height:'auto',marginRight:'10px'}}  draggable="false" />
                        </a>
                        <a href={xLink} target="_blank" rel="noopener noreferrer">
                        <img src={footerx} alt='footer' style={{width:'100%',maxWidth:'50px',height:'auto'}}  draggable="false"/>
                        </a>
                    </Socail>
                </Grid>
                <Grid item xs={12} md={2} >
                    <Typography style={{color:'#1E2329',fontWeight:'600',fontSize:'18px',marginBottom:'10px'}}>Quick links</Typography>
                 <a href='#Home'><Typography style={{color:'#1E2329',fontSize:'18px'}}>Home</Typography></a>   
                   <a href='#Features'><Typography style={{color:'#1E2329',fontSize:'18px'}}>Features</Typography></a> 
                    <a href='#Revenueshare'><Typography style={{color:'#1E2329',fontSize:'18px'}}>Revenue share</Typography></a>
                    <a href='#Roadmap'><Typography style={{color:'#1E2329',fontSize:'18px'}}>Roadmap</Typography></a>
                   <a href='#FAQ'><Typography style={{color:'#1E2329',fontSize:'18px'}}>FAQ</Typography></a> 
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography style={{color:'#1E2329',fontWeight:'600',fontSize:'18px',marginBottom:'10px'}}>Contact us</Typography>
                    <Typography style={{color:'#1E2329',fontSize:'18px'}}>info@thebpay.xyz</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography style={{color:'#1E2329',fontWeight:'600',fontSize:'18px',marginBottom:'10px'}}>Contact address</Typography>
                    <Typography style={{color:'#1E2329',fontSize:'18px'}}>{CA}</Typography>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Footer