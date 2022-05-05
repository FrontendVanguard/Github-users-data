import React from 'react'
import { Image } from '../Image/'

import { UserContainer, SubText } from './User.styles'

export const User = ({ user }) => {
  const { login, html_url, avatar_url } = user
  return (
    <UserContainer>
      <Image url={avatar_url} />
      <SubText>Login: {login}</SubText>
      <SubText>
        Profile Link: <a href={html_url}>{html_url}</a>
      </SubText>
    </UserContainer>
  )
}
