import React from 'react'
import Image from 'next/image';
import profile from '../../public/profile.png'
import { signIn } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { changeIsGuest } from '../../features/login/loginSlice';

const Guest = () => {
    const dispatch = useDispatch()

    const handleGuestSignIn = () => {
        dispatch(changeIsGuest(true))
    }
    return (
        <>
            <button className="border-2 border-white rounded-lg p-2 flex space-x-2" onClick={handleGuestSignIn}>
                <div>
                    <Image
                        src={profile}
                        width={28}
                        height={28}
                    />
                </div>
                <div className="text-center h-full">
                    Login As Guest
                </div>
            </button>
        </>
    )
}

export default Guest;