import styled from 'styled-components'

import { colors } from './../../constants/colors'

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  padding: 18px;
  border: 1px solid ${colors.DARK_LIGHT_400};
  border-radius: 20px;
  margin: 4px;
  width: 60%;
`

export const SubText = styled.span`
  font-size: 22px;
  a {
    text-decoration: none;
  }
`
