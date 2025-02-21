import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const Roadmap = () => {
    const isMobile = useMediaQuery("(max-width:799px)");

    const HighlightTypography = styled(Typography)`
        color: #fff;
        font-size: 64px;
        @media (max-width: 720px) {
    font-size: 54px;
  }
    `;

    const SectionTitle = styled(Typography)`
        color: #FFB700;
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 6px;
    `;
    const SectionTitlePara = styled(Typography)`
        color:rgb(255, 255, 255);
        font-size: 18px;
        margin-bottom: 16px;
    `;

    const Card = styled(Box)`
        background: #242731;
        padding: 25px 30px;
        border-radius: 8px;
        color: #fff;
        text-align: left;
        height:100%;
        // min-height:200px;
    `;
    const BoxWrap = styled(Box)`
        background:#181A20 ;
        padding: 30px;
        border-radius: 8px;
        color: #fff;
        text-align: center;
    `;

    const Wrapper = styled(Box)`
        padding: 80px 0px;
    `

    return (
        <Wrapper >
        <Box sx={{ backgroundColor: "#0B0E11", py: 6, textAlign: "center" }}>
            <Container id="Roadmap">
                <HighlightTypography data-aos="fade-up" >Roadmap</HighlightTypography>
                
                {/* Token Launch */}
                <BoxWrap sx={{ my: 4 }} data-aos="fade-up">
                    <SectionTitle>Token Launch</SectionTitle>
                    <SectionTitlePara>Bpay's official token release.</SectionTitlePara>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">1. Establishing website and socials</Typography><Typography>For ample community discoverability, $BPAY establishes its mediums of communication.</Typography></Card></Grid>
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">2. PancakeSwap fair-launch</Typography><Typography>With 15 BNB LP (burned), $BPAY aims to reach the top trending charts within a few hours of release.</Typography></Card></Grid>
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">3. Securing listings</Typography><Typography>With $BPAY deployed, the team will seek CoinMarketCap and CoinGecko for token listings.</Typography></Card></Grid>
                    </Grid>
                </BoxWrap>

                {/* Product Release */}
                <BoxWrap sx={{ my: 4 }} data-aos="fade-up">
                    <SectionTitle>Product Release</SectionTitle>
                    
                    <SectionTitlePara>Bpay's official release.</SectionTitlePara>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">1. Order your Bpay card</Typography><Typography>For ample community discoverability, $BPAY establishes its mediums of communication.</Typography></Card></Grid>
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">2. Top-up with BNB</Typography><Typography>Once Bpay Card is released, every user will be able to easily top-up their card with a BNB deposits. Eventually $BPAY deposits will also be supported.</Typography></Card></Grid>
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">3. Spend away!</Typography><Typography>With your Bpay Card in hand, you can start making purchases at your favorite merchants with ease.</Typography></Card></Grid>
                    </Grid>
                </BoxWrap>

                {/* Marketing Outreach */}
                <BoxWrap sx={{ my: 4 }} data-aos="fade-up">
                    <SectionTitle>Marketing Outreach</SectionTitle>
                    <SectionTitlePara>With a live product and token, Bpay Card drives strong marketing.</SectionTitlePara>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">1. Influencer-based marketing</Typography><Typography>Influencers are at the core of every chain ecosystem, and it's no exception for Bpay Card. Partnership deals are to come.</Typography></Card></Grid>
                        <Grid item xs={12} sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">2. Reputational thread</Typography><Typography>Trust and reliability are paramount. The Bpay team will build a reputations thread so people can share their experiences using the Bpay Card.</Typography></Card></Grid>
                        <Grid item xs={12}sm={12} md={4}><Card><Typography sx={{fontWeight:'bold' ,margin:"10px 0"}}  variant="h6">3. TikTok & Influencer Marketing Strategy</Typography><Typography>Leveraging TikTok and influencers to boost brand awareness, drive engagement, and accelerate user adoption.</Typography></Card></Grid>
                    </Grid>
                </BoxWrap>
            </Container>
        </Box>
        </Wrapper>
    );
};

export default Roadmap;
