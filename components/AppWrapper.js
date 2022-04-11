import React, { useEffect, useState } from 'react'
import Header from './Header';
import Layout from './Layout';
import Login from './login/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const AppWrapper = ({ Component, pageProps }) => {
    const { data: session } = useSession()
    var { isGuest } = useSelector(state => state.login)

    if (!session && !isGuest) return <Login />
    
    console.log('isGuest:', isGuest)
    console.log('session data after login:', session)
    return (
        <div className="bg-[#19222e]">
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default AppWrapper;

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)

    return {
        props: {
            session
        }
    }
}