import styled from "@emotion/styled"

const GlobalWrapper = styled("div")`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`

export default GlobalWrapper