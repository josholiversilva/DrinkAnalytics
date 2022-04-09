import React from 'react'
import Google from './Google';

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="card bg-[#19222e] text-white w-1/6 shadow-2xl rounded-lg shadow-[#95c4de] flex items-center space-y-12 h-64 pt-4">
                <div className="text-white text-xl font-bold">Boba Login</div>
                <Google />
            </div>
        </div>
    )
}

export default Login;