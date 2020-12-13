import React, { useState, createContext } from 'react'
const AuthContext = createContext()
const { Provider } = AuthContext
const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    expiresAt: null,
    userInfo: {}
  })
  console.log(authState, 'provider')
  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }
  return (
    <Provider
      value={{
        authState,
        setAuthInfo: (authInfo) => setAuthInfo(authInfo)
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
