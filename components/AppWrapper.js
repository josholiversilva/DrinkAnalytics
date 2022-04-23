import React, { useEffect, useState } from 'react'
import Header from './Header';
import Layout from './Layout';
import Login from './login/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/auth'

const AppWrapper = ({ Component, pageProps }) => {
    const { isGuest } = useSelector(state => state.login)
    const { user } = useAuth()

    return (
        <>
        { user || isGuest ?
        <div className="bg-[#19222e] h-full">
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
        :
        <Login />
        }
        </>
    )
}

export default AppWrapper;