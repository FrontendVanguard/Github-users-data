import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Image } from '../../Image'
import { UserContainer, SubText } from './UserPreview.styles'

export const UserPreview = ({ user }) => {
  const navigate = useNavigate()
  const { login, html_url, avatar_url, id } = user

  const handleClick = () => {
    navigate(`users/${login}`)
  }
  return (
    <UserContainer onClick={handleClick}>
      <Image url={avatar_url} />
      <SubText>Login: {login}</SubText>
      <SubText>
        Profile Link:{' '}
        <a href={html_url} onClick={(e) => e.stopPropagation()}>
          {html_url}
        </a>
      </SubText>
    </UserContainer>
  )
}
