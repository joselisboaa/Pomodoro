import React, { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface IAuthProvider {
    children: React.ReactNode;
}

type TUser = {
    id: number;
    email: string;
} | null

interface IAuthContext {
    authenticated: boolean;
    user: TUser;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const navigate = useNavigate()
  const [user, serUser] = useState<TUser>(null)

  const login = (email: string, password: string) => {
    const loggedUser = {
      id: 123,
      email
    }

    localStorage.setItem('user', JSON.stringify(loggedUser))

    if (password === 'secret') {
      serUser(loggedUser)
      navigate('/')
    }
  }

  const logout = () => {
    serUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
