import styled from "@emotion/styled";

const PageWrapper = styled.div`
    background-color: ${ (props) => props.theme.pageColor};
    min-height: 100vh;
`

export { PageWrapper }