import newStyled from '@emotion/styled'
import React from 'react'

const Wrapper = newStyled.div`
    padding: 140px 0px;
`

const SectionWarpper = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default SectionWarpper