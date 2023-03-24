import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '@/styles/themes/default'
import { GlobalStyle } from '@/styles/global'
import { Transaction } from '@/pages/Transation'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transaction />
    </ThemeProvider>
  )
}
