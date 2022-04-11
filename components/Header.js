import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import guest from '../public/profile.png'
import { changeIsGuest } from '../features/login/loginSlice'

const Header = () => {
    const { data: session } = useSession()
    const dispatch = useDispatch()
    var { isGuest } = useSelector(state => state.login)

    const [showProfile, setShowProfile] = useState(false)
    const router = useRouter()
    const handleClick = (pageRef) => {
        router.push(`/${pageRef}`)
    }

    const handleLogout = (e) => {
        e.preventDefault()
        if (isGuest) 
            dispatch(changeIsGuest(false))
        signOut()
    }

    return (
        <div className="p-2 h-11 w-screen bg-[#19222e] border-b-2 border-[#95c4fe] flex flex-col space-x-2 items-center shadow-xl shadow-bg-[#95c4fe] rounded-sm fixed">
            <div className="ml-4 flex space-x-2 w-screen">
                <div className="border-6 border-black">
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('')}>Home</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('analytics')}>Analytics</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('form')}>Form</button>
                </div>
                <div className="w-full relative">
                    <button className="text-lg text-[#95c4fe] absolute right-0 mr-4 hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={(e) => {
                            setShowProfile(!showProfile)
                        }
                    }>
                        <div className="flex justify-center items-center h-8">
                            <div className="h-8">
                                <Image 
                                    src={session ? session.user.image : guest}
                                    height={32}
                                    width={32}
                                />
                            </div>
                            <div className="h-full ml-2">
                                { session ?
                                    session.user.firstname
                                :
                                    'Guest'
                                }
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            { showProfile &&
            <div className="w-screen flex flex-col right-0 items-end rounded-sm mt-1">
                <div className="w-24 bg-[#95c4fe]">
                    <div className="">
                        <button className="text-lg w-full hover:bg-gray-200" onClick={(e) => {
                                handleLogout(e)
                            }
                        }>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Header