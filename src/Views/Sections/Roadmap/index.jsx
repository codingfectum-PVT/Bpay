import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Roadmap = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const isMobile = useMediaQuery("(max-width:799px)");

    const HighlightTypography = styled(Typography)`
        color: #fff;
        font-size: 64px;
        text-align: center;
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
        padding: 21.9px 30px;
        color: #fff;
        text-align: left;
        gap: 10px;
        height:100%;
        margin-bottom:2px;
        @media (max-width: 1000px) {
        width: 100% !important;
       }
    `;

    const ProjectSummary = styled(Typography)`
       @media (max-width: 1000px) {
           text-align: center;
           font-size: 26px !important;
       }
   `;

   const MainCard = styled(Card)`
       @media (max-width: 1000px) {
           text-align: center;
       }
   `;

    const BoxWrap = styled(Box)`
        background:#181A20 ;
        padding: 60px;
        gap: 14px;
        display: flex;
        border-radius: 8px;
        color: #fff;
        @media (max-width: 1000px) {
           padding: 30px;
       }
    `;

    const Wrapper = styled(Box)`
        padding: 80px 0px;
    `;

    const TokenDistribution = styled(Typography)`
        @media (max-width: 1000px) {
            text-align: center;
            font-size: 26px !important;
            margin-top: 50px;
        }
    `;

    const Tokenimgcard = styled(Card)`
        @media (max-width:1000px) {
            text-align: center;
            border-radius: 18px;
            margin-bottom: 40px;
            width: 100%;  
        }
    `;

    const BorderCard = styled(Card)`
        @media (max-width:1000px) {
            text-align: center;
            border-top-left-radius: 15px;
        }
    `;

    const LastCard = styled(Card)`
        @media (max-width:1000px) {
            text-align: center;
            border-bottom-left-radius: 15px;
        }
    `;

    const projectSummaryData = [
        { title: "Total Groups", value: "11" },
        { title: "Total Emission Duration", value: "6 months" },
        { title: "Circulating Supply at TGE", value: "10M" },
        { title: "Total Supply", value: "100M", customStyle: { height: isMobile ? "180px" : "255px" } }
    ];

    const tokenDistributionData = [
        { color: "#735DD0", label: "10% Circulating LP", value: 10 },
        { color: "#FF928A", label: "2% Airdrop", value: 2 },
        { color: "#3CC3DF", label: "15% Marketing", value: 15 },
        { color: "#FFAE4C", label: "3% Burn", value: 3 },
        { color: "#537FF1", label: "2% Advisor", value: 2 },
        { color: "#6FD195", label: "5% Airdrop to CZ", value: 5 },
        { color: "#F4CF3B", label: "5% Ecosystem Growth", value: 5 },
        { color: "#8C63DA", label: "35% Development & Research", value: 35 },
        { color: "#2BB7DC", label: "10% CEX Listings", value: 10 },
        { color: "#6186CC", label: "5% Community Treasury/Reward", value: 5 },
        { color: "#55C4AE", label: "5% Staking", value: 5 },
        { color: "#EA9245", label: "3% TBA", value: 3 },
    ];

    return (
        <Wrapper>
            <Box sx={{ backgroundColor: "#0B0E11", py: 6 }}>
                <Container id="Tokenomics">
                    <HighlightTypography>Tokenomics</HighlightTypography>
                    <BoxWrap sx={{ my: 4 }}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={3.6} mr={1} display="flex" flexDirection="column">
                                <ProjectSummary mb={1} style={{ color: "#F0B90B", fontSize: "24px", fontWeight: "600" }}>Project Summary</ProjectSummary>
                                <Grid spacing={2}>
                                    {projectSummaryData.map((item, index) => (
                                        <Grid item xs={12} sm={12} md={12} key={index}>
                                            <MainCard style={{
                                                borderTopRightRadius: index === 0 ? "15px" : "0",
                                                borderTopLeftRadius: index === 0 ? "15px" : "0",
                                                borderBottomRightRadius: index === projectSummaryData.length - 1 ? "15px" : "0",
                                                borderBottomLeftRadius: index === projectSummaryData.length - 1 ? "15px" : "0",
                                                ...item.customStyle,
                                            }}>
                                                <Typography sx={{ margin: "9px 0", fontSize: { xs: "18px", md: '20px' } }} variant="h6">{item.title}</Typography>
                                                <Typography style={{ fontWeight: "bold", fontSize: "21px" }}>{item.value}</Typography>
                                             </MainCard>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} mr={0.3} ml={0.3} md={4.4} display="flex" flexDirection="column" marginBottom="2.1px">
                                <TokenDistribution mb={1} style={{ color: "#F0B90B", fontSize: "24px", fontWeight: "600" }}>
                                    Token Distribution
                                </TokenDistribution>
                                <Grid item xs={12} md={12} display="flex" justifyContent="center">
                                    <Tokenimgcard  style={{ borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}
                                        onMouseLeave={() => setHoveredItem(null)} >
                                        <ResponsiveContainer width={320} height={400}>
                                            <PieChart>
                                                  <Pie
                                                    data={tokenDistributionData}
                                                    dataKey="value"
                                                    nameKey="label"
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={120}
                                                    outerRadius={160}
                                                    fill="#8884d8"
                                                    stroke="none"
                                                    isAnimationActive={false}>

                                                    {tokenDistributionData.map((entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={entry.color}
                                                            style={{
                                                                filter: hoveredItem === index ? `url(#glow-${index})` : hoveredItem !== null ? 'blur(1px)' : 'none', // Blur non-hovered segments
                                                                opacity: hoveredItem === null || hoveredItem === index ? 1 : 0.5, // Fade non-hovered segments
                                                                transition: 'filter 0.3s ease, opacity 0.3s ease',
                                                            }}  onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}/>
                                                    ))}
                                                </Pie>

                                                <defs>
                                                    {tokenDistributionData.map((entry, index) => (
                                                        <filter id={`glow-${index}`} key={`glow-${index}`}>
                                                            {/* Create a blurred version of the segment */}
                                                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
                                                            {/* Apply the segment's color to the blur */}
                                                            <feFlood floodColor={entry.color} floodOpacity="0.8" result="glowColor" />
                                                            {/* Clip the glow to the original shape of the segment */}
                                                            <feComposite in="glowColor" in2="SourceAlpha" operator="in" result="glow" />
                                                            {/* Merge the glow with the original segment */}
                                                            <feMerge>
                                                                <feMergeNode in="glow" />
                                                                <feMergeNode in="SourceGraphic" />
                                                            </feMerge>
                                                        </filter>
                                                    ))}
                                                </defs>

                                                {/* Dynamic center text */}
                                                    <text
                                                    x="50%"
                                                    y="50%"
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize="24px"
                                                    fontWeight="600"
                                                    fill={hoveredItem !== null ? tokenDistributionData[hoveredItem].color : "#ffffff"} >
                                                    {hoveredItem !== null ? `${tokenDistributionData[hoveredItem].value}%` : "100M"}
                                                    </text>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </Tokenimgcard>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} md={3.7} mt={5.6} sx={{ order: { xs: 3, md: 3 }, display: "flex", flexDirection: 'column' }}>
                                <Grid item xs={12} sm={12} md={12} display="flex" flexDirection="column" justifyContent="flex-end" minHeight="100%" >
                                    {tokenDistributionData.map((item, index) => {
                                        const CardComponent = index === 0 ? BorderCard : index === tokenDistributionData.length - 1 ? LastCard : Card;
                                        return (
                                            <CardComponent key={index}
                                                sx={{p: 1.6,display: "flex",alignItems: "center",gap: 1,borderTopRightRadius: index === 0 ? '15px' : '0',borderBottomRightRadius: index === tokenDistributionData.length - 1 ? '20px' : '0',}}
                                                onMouseEnter={() => setHoveredItem(index)}
                                                onMouseLeave={() => setHoveredItem(null)}>
                                                <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: "50%", border: "2px solid white" }} />
                                                <Typography style={{ fontSize: '17px' }}>{item.label}</Typography>
                                            </CardComponent>
                                        );
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </BoxWrap>
                </Container>
            </Box>
        </Wrapper>
    );
};

export default Roadmap;