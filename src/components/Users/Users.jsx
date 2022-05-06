import React from 'react'
import { NavLink } from 'react-router-dom'

import { useGetUsersQuery } from '../../services/usersApi/users.api'
import { UserPreview } from './UserPreview'
import { UsersContainer } from './Users.styles'

export const Users = () => {
  const { data } = useGetUsersQuery()
  return (
    <UsersContainer>
      {data?.map((user) => (
        <UserPreview user={user} key={user.id} />
      ))}
    </UsersContainer>
  )
}
