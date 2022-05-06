import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { User } from './../User'
import { Users } from '../Users'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Users />}></Route>
        <Route path={`users/:login`} element={<User />} />
      </Routes>
    </>
  )
}
