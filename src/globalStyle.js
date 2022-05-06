import { createGlobalStyle } from 'styled-components'

import { colors } from './constants/colors'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;

  background-color: ${colors.DARK_LIGHT_400};
  color: ${colors.GRAY_100};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: ${colors.GRAY_100};
  :hover {
    text-decoration: underline;
    color: ${colors.BLUE_300};
  }
}
`
