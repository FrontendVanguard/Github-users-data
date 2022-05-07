import React, { useEffect } from 'react'

import { PER_PAGE } from './../../constants/query-params'
import { useGetUsersMutation } from '../../services/usersApi/users.api'
import { UserPreview } from './UserPreview'
import { CustomPaginate, UsersContainer } from './Users.styles'

export const Users = () => {
  const [getUsers, { data }] = useGetUsersMutation()

  const handlePageChange = (e) => {
    getUsers({ per_page: PER_PAGE, since: e.selected * PER_PAGE })
  }

  useEffect(() => {
    getUsers({ per_page: PER_PAGE, since: 0 })
  }, [])

  return (
    <UsersContainer>
      <CustomPaginate
        breakLabel="..."
        nextLabel=" > "
        pageRangeDisplayed={4}
        onPageChange={(e) => handlePageChange(e)}
        previousLabel=" < "
        previousClassName="page previous"
        nextClassName="page next"
        pageCount={100}
        renderOnZeroPageCount={null}
        pageClassName="page"
        activeClassName="page-active"
        breakClassName="page break"
      />
      {data?.map((user) => (
        <UserPreview user={user} key={user.id} />
      ))}
    </UsersContainer>
  )
}
