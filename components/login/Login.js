import React from 'react'
import Google from './Google';
import Guest from './Guest';
import firebase from 'firebase/app';

const Login = () => {
    const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    }
    return (
        <div className="flex flex-col space-y-14 justify-center items-center h-screen w-full">
            <div className="card bg-[#19222e] text-white w-full flex items-center space-y-12 h-64">
                <div className="text-white text-xl font-bold">Boba Login</div>
                    <Google />
                <div>
                    OR
                </div>
                <Guest />
            </div>
            <div className="text-white text-xs italic">(Guest Accounts Have Limited Features)</div>
        </div>
    )
}

export default Login;