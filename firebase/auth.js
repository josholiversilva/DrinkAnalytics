import React, { useState, createContext, useContext, useEffect } from 'react'
import nookies from 'nookies'
import firebaseClient from './clientApp'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    firebaseClient();
    const [user, setUser] = useState()

    useEffect(() => {
        firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null)
                nookies.set(undefined, "token", "", {})
                return
            }

            const token = await user.getIdToken()
            setUser(user)
            nookies.set(undefined, "token", user, {});
        })
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)