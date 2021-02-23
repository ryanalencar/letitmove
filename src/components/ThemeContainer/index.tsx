import { ThemeProvider as StyledProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/global.js'
import theme from '../../styles/theme'

export default function ThemeContainer({ children }: any) {
  return (
    <StyledProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  )
}
