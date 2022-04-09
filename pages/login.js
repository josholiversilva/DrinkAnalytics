import React from 'react'
import Login from '../components/login/Login';

const login = () => {
    var isLoggedIn = false
    console.log(isLoggedIn)
    return (
      !isLoggedIn &&
      <Login />
    )
}

export default login;