import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { colors } from './../../constants/colors'

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

export const CustomPaginate = styled(ReactPaginate)`
  list-style-type: none;
  display: flex;
  align-self: center;
  .page {
    margin: 15px;
    background-color: ${colors.GRAY_400};
    color: ${colors.WHITE};
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    a {
      width: 100%;
      height: 100%;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-active {
      color: ${colors.W};
      background-color: ${colors.GRAY_100};
    }
    :hover {
      background-color: ${colors.GRAY_100};
    }
  }
  .break {
    display: none;
  }
`
