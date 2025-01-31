import React, { useEffect } from 'react';
import SectionWarpper from '../../Components/SectionWrapper';
import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';
import glow from '../../../assets/glow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DigitalGoodsLink, PhysicalGoodsLink, ServicesLink } from '../../../links';

const AboutButton = styled(Button)`
  padding: 5px 15px;
  background-color: #707070;
  border-radius: 25px;
  border: 1px solid #ffffff;
  color: #ffffff;
  margin-bottom: 40px;
  cursor: default;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  :hover{
    background-color: #707070;
  }
`;

const HighlightTypography = styled(Typography)`
  margin-bottom: 30px;
  background: linear-gradient(131deg, #ffffff 30%, #fcbd49 65%, #fd9c39 85%);
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;

`;

const CardImageContainer = styled('div')`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 470px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover .card-content {
    background: linear-gradient(150deg, #000000 0%, #fd9c3969 85%);
    height: 100%;
    border-radius: 20px;
    padding: 12% 7%;
    .card-button{ opacity: 1}
  }
 
`;

const CardImage = styled('img')`
  width: 100%;
  border-radius: 10px;
`;

const CardContent = styled('div')`
  position: absolute;
  bottom: 0px;
  left: 0;
  transition: all 0.3s ease;
  transform: translateY(0);
  width: 100%;
  height: 43%;
  padding: 12% 7%;
  text-align: left;
  @media (max-width: 768px) {
  padding: 9% 7%; 
  }
`;

const CardText = styled(Typography)`
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: bold;
`;

const CardPara = styled(Typography)`
  color: #ffffff;
  font-size: 14px;
`;

const CardButton = styled(Button)`
  opacity: 0;
  margin-top: 20px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 10px 25px;

  transition: all 0.3s ease;
  :hover{
    background-color: #ffffff;
  }
`;

const Imagewrapper = styled(Box)`
  background-image: url(${glow});
  background-size: 100% 100% ;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
  }
`;

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <SectionWarpper>
      <Imagewrapper id="physicalproducts">
        <Container maxWidth="xl" id="DigitalGoods">
          <Grid item xs={12} justifyContent={'center'} textAlign={'center'}>
            <AboutButton id="Services"  data-aos="fade-up">Shop Now</AboutButton>
            <HighlightTypography variant="h2" sx={{ fontSize: { xs: '45px', sm: '40px', md: '60px' } }}data-aos="fade-up"  >
              Categories
            </HighlightTypography>
            <Typography variant="body1" maxWidth="600px" margin={'0 auto'}data-aos="fade-up">
              Redefining e-commerce with AI and blockchain. Buy, sell, and list
              physical products, digital goods, and specialized services
              seamlessly on AICM.
            </Typography>

            <Grid container spacing={2} justifyContent="center" mt={5}>
              {[ 
               { 
                image: card1, 
                title: 'Physical Goods', 
                desc: 'Discover a wide range of physical products, from custom apparel to merchandise and collectibles. AICM connects creators and vendors with buyers seeking quality, transparency, and security in every transaction.', 
                link:  PhysicalGoodsLink, 
               
              },
              { 
                image: card2, 
                title: 'Digital Goods', 
                desc: 'Explore digital products like e-books, courses, and creative content. Whether you’re a buyer or seller, AICM provides a seamless platform to trade securely with blockchain-powered transparency.', 
                link:  DigitalGoodsLink, 
               
              },
              { 
                image: card3, 
                title: 'Services', 
                desc: 'Unlock access to a variety of specialized services, including private Telegram crypto signal groups, crypto courses, and Web3 advertising solutions. AICM provides a seamless platform to list, discover, and purchase services securely, powered by AI tools and decentralized transparency.', 
                link:  ServicesLink, 
           
              },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up" id={item.id}>
                  <CardImageContainer>
                    <CardImage src={item.image} alt={item.title} />
                    <CardContent className="card-content">
                      <CardText variant="h4">{item.title}</CardText>
                      <CardPara>{item.desc}</CardPara>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <CardButton className="card-button" variant="contained">
                          Explore Now
                        </CardButton>
                      </a>
                    </CardContent>
                  </CardImageContainer>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Imagewrapper>
    </SectionWarpper>
  );
};

export default Categories;
