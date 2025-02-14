import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import firstBpay from "../../../assets/firstBpay.svg";
import secondBpay from "../../../assets/secondBpay.svg";
import thirdBpay from "../../../assets/thirdBpay.svg";

const tiers = [
  { tier: "Tier 1", name: "Bpay Beagle", tokens: "1,000 $Bpay", balance: "$100", image: firstBpay },
  { tier: "Tier 2", name: "Bpay Husky", tokens: "5,000 $Bpay", balance: "$500", image: secondBpay },
  { tier: "Tier 3", name: "Bpay Malinois", tokens: "5,000 $Bpay", balance: "$500", image: thirdBpay },
];

const Wrapper = styled(Box)`
  // background-color: #F5F5F5;
  // padding: 80px 0px;
`;

const HighlightTypography = styled(Typography)`
  color: #000;
  margin-bottom: 10px;
  font-size: 64px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TypoTitle = styled(Typography)`
  color: #000;
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 5px;
    font-size: 18px;
  }
  @media (max-width: 599px) {
display:none;
  }
`;

const GridCustom = styled(Grid)`
  border-radius: 15px;
  background-color: #F5F5F5;
  margin: 10px 0;
  padding: 10px 12px;
  @media (max-width:599px){
    
  padding: 18px 12px;
  }
`;

const CardImage = styled("img")`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Discription = styled(Typography)`
  font-size: 18px;
  margin-bottom: 50px;
  max-width: 620px;
  margin-right: auto;
  margin-left: auto;
`;
const Token = styled(Grid)`
  @media (max-width: 768px) {
    text-align: center;
  }
`
const Balance = styled(Grid)`
  @media (max-width: 768px) {
    text-align: center;
  }
`
const Name = styled(Grid)`
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const Icontier = styled(Grid)`
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`


const BpayCardTiers = () => {
  return (
    <Wrapper id="Getyourcard">
      <Container>
        <Box sx={{ margin: "auto", textAlign: "center", py: 4 }}>
          <HighlightTypography>
            <span style={{ color: "#F0B90B" }}>Bpay</span> card eligibility tiers
          </HighlightTypography>
          <Discription align="center" color="textSecondary">
            Bpay card tiers offer varying benefits and eligibility, based on your token holdings.
          </Discription>
          <Grid container sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", p: 3 }}>
            {/* Header */}
            <Grid container item sx={{ fontWeight: "bold", pb: 1,textAlign:'center' }}>
              <Grid item xs={12} sm={3} textAlign="left">
                <TypoTitle style={{paddingLeft:"52px"}}>Tier</TypoTitle>
              </Grid>
              <Grid item xs={12} sm={3} textAlign="left">
                <TypoTitle>Card name</TypoTitle>
              </Grid>
              <Grid item xs={12} sm={3} textAlign="left">
                <TypoTitle>Token holding requirement</TypoTitle>
              </Grid>
              <Grid item xs={12} sm={3} textAlign="left">
                <TypoTitle>Max card balance</TypoTitle>
              </Grid>
            </Grid>

            {/* Rows */}
            {tiers.map((tier, index) => (
              <GridCustom container item alignItems="center" key={index}>
                <Grid item xs={12} sm={3} textAlign="left">
                  <Icontier style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "#000" }}>
                    <CardImage src={tier.image} />
                    <span style={{ color: "#000", fontSize: "20px", marginRight: "8px" }}>{tier.tier}</span>
                  </Icontier>
                </Grid>
                <Name item xs={12} sm={3} textAlign="left" display="flex" alignItems="center">
                  <Typography color="#FDC800">{tier.name}</Typography>
                </Name>
                <Token item xs={12} sm={3} color="#000" textAlign="left">
                  {tier.tokens}
                </Token>
                <Balance item xs={12} sm={3} color="#000" textAlign="left">
                  {tier.balance}
                </Balance>
              </GridCustom>
            ))}
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default BpayCardTiers;
