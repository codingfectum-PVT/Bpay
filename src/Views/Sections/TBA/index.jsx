import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled';
import { CA } from '../../../links'; 

const Wrapper = styled(Box)`
   background: rgba(240, 185, 11, 0.30);
   padding: 10px;
   justify-content: center;
   text-align: center;
`

const TBA = () => {
  return (
    <Wrapper>
      <Typography variant='body1' style={{ color: '#1E2329', fontSize: '18px', fontWeight: '400' }}>
        <span style={{ color: '#1E2329', fontWeight: 'bolder' }}>$BPAY </span>
        contract address: <a href={CA} target="_blank" rel="noopener noreferrer" style={{ color: '#1E2329', textDecoration: 'none' }}>{CA}</a>
      </Typography>
    </Wrapper>
  )
}

export default TBA;
