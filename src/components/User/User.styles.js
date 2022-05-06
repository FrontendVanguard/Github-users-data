import styled from 'styled-components'

import { colors } from './../../constants/colors'

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 350px;
`

export const MajorText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 32px;
  line-height: 1.25;
  margin-top: 24px;
`

export const SubText = styled.span`
  color: ${colors.GRAY_100};
  font-size: 22px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 2;
`

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubLink = styled.a`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
`

export const MinText = styled.span`
  font-size: 18px;
  :hover {
    color: ${colors.BLUE_300};
    text-decoration: underline;
    cursor: pointer;
  }
  line-height: 2;
`

export const Companies = styled.div``

export const SubLinkCompanies = styled.a`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
  font-weight: 600;
  :hover {
    text-decoration: underline;
    color: ${colors.GRAY_100};
  }
`
