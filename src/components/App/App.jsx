import React from 'react'

import { useGetUsersQuery } from '../../services/usersApi/users.api'
import { User } from './../User'
import { UsersContainer } from './App.styles'

export const App = () => {
  const { data } = useGetUsersQuery()

  return (
    <UsersContainer>
      {data?.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </UsersContainer>
  )
}
