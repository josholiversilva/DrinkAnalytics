import React from 'react'
import Header from './Header';
import Layout from './Layout';
import Login from './login/Login';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';

const AppWrapper = ({ Component, pageProps, providers }) => {
    const { data: session } = useSession()
    const { isGuest } = useSelector(state => state.login)

    console.log('isGuest: ', isGuest)

    if (!session && !isGuest) return <Login />

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
    const providers = await getProviders(ctx)
    const session = await getSession(ctx)

    console.log('getserverprops:', providers)

    return {
        props: {
            providers,
            session
        }
    }
}