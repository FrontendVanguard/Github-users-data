import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users',
      }),
    }),
    getUser: builder.query({
      query: (login) => ({
        url: `/users/${login}`,
      }),
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = usersApi
