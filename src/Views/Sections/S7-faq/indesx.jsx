import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Wrapper = styled(Box)`
  padding: 80px 0px;

`;
const Heading = styled(Typography)`
  color: #1e2329;
  font-weight: 600;
  font-size: 64px;
  margin-bottom: 10px;
  @media (max-width: 720px) {
    font-size: 33px;
  }
`;
const Discription = styled(Typography)`
  font-size: 18px;
  color: #1e2329;
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    font-size: 17px !important;
  }
`;
const FAQContainer = styled(Box)`
  display: flex;
  justify-content: center; 
  margin-top: 40px;
`;
const FAQContent = styled(Box)`
  width: 100%;
  max-width: 800px; 
`;
const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  margin-bottom: 10px;
  background-color: transparent !important; 
  &:before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0px 16px;
  .MuiAccordionSummary-content {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0;
  }
`;
const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #f2bd12; 
  border-radius: 50%;
  color: #1E2329; 
`;
const Question = styled(Typography)`
  font-weight: 600;
  
  font-size: 22px;
  color: #1e2329;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
const Answer = styled(Typography)`
padding-left: 40px;  
font-size: 18px;
  color: #1e2329; 
`;

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const faqData = [
    {
      id: 1,
      question:'Why haven’t I still received my card?',
      answer: '$BPAY cards are issued instantly upon request, but in some cases, processing times may vary due to network congestion or verification checks. If you haven’t received your card yet, please check your dashboard or contact our support team for assistance.',
    },
    {
      id: 2,
      question: 'How secure is the BPAY card?',
      answer: '$BPAY is built with top-tier security – featuring end-to-end encryption, multi-layer authentication, and fraud protection to keep your funds safe. Your privacy is our priority, and since no KYC is required, your identity remains fully anonymous while ensuring secure transactions.',
    },
    {
      id: 3,
      question: 'What is the minimum top-up for the card?',
      answer: 'The minimum top-up amount will be announced soon to ensure accessibility for all users. BPAY allows seamless deposits with BNB and, in the future, $BPAY, ensuring smooth and cost-effective transactions.',
    },
    {
      id: 4,
      question: 'Are there limits to the BPAY card?',
      answer: 'BPAY offers high transaction limits to ensure users can spend freely without restrictions. However, certain merchants or payment processors may have their own individual limits. Stay tuned for exact details on spending limits, which will be optimized for maximum flexibility.',
    },
  ];

  return (
    <Wrapper id='FAQ'>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} textAlign="center">
            <Heading>Frequently asked questions</Heading>
            <Discription>
              Bpay is a revolutionary product, and like such, questions may arise.
            </Discription>
          </Grid>
        </Grid>
        <FAQContainer>
          <FAQContent>
            {faqData.map((faq) => (
              <StyledAccordion key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}>
                <StyledAccordionSummary
                  aria-controls={`panel${faq.id}-content`}
                  id={`panel${faq.id}-header`}>

                  <IconWrapper>
                    {expanded === faq.id ? <RemoveIcon /> : <AddIcon />}
                  </IconWrapper>
                  <Question>{faq.question}</Question>
                </StyledAccordionSummary>
                <AccordionDetails>
                  <Answer>{faq.answer}</Answer>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </FAQContent>
        </FAQContainer>
      </Container>
    </Wrapper>
  );
};

export default FAQ;