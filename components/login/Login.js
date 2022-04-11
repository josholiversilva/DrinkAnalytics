import React from 'react'
import Google from './Google';
import Guest from './Guest';

const Login = () => {
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
            <div className="text-white text-xs italic">(Guest Accounts Are Cleaned Once Every Day & Exit On Hard Resets)</div>
        </div>
    )
}

export default Login;