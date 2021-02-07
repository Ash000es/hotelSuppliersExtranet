import React, { useState, createContext } from 'react'
import { useHistory } from 'react-router-dom'
const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const history = useHistory()
  // const token = document.cookie
  // window.Cookies.getItem('token')
  // console.log(token, 'kk')
  const userInfo = window.localStorage.getItem('userInfo')
  const expiresAt = window.localStorage.getItem('expiresAt')
  const [authState, setAuthState] = useState({
    token: null,
    expiresAt: expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {}
  })

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false
    }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    window.localStorage.setItem('expiresAt', expiresAt)

    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }
  const LogOut = () => {
    window.localStorage.removeItem('expiresAt')
    window.localStorage.removeItem('userInfo')
    setAuthState({
      token: null,
      userInfo: null,
      expiresAt: {}
    })
    history.push('/LogIn')
  }
  const isAdmin = () => {
    return authState.userInfo.role === 'admin'
  }
  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        LogOut,
        isAdmin
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
