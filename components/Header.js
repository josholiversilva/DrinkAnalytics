import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsGuest } from '../features/login/loginSlice'
import { useAuth } from '../firebase/auth'
import firebase from 'firebase/app'

const Header = () => {
    const { user } = useAuth()
    const dispatch = useDispatch()
    var { isGuest } = useSelector(state => state.login)

    const [showProfile, setShowProfile] = useState(false)
    const router = useRouter()
    const handleClick = (pageRef) => {
        router.push(`/${pageRef}`)
    }

    const handleLogout = (e) => {
        e.preventDefault()
        if (isGuest) {
            dispatch(changeIsGuest(false))
        }
        firebase.auth().signOut()
    }

    return (
        <div className="h-12 w-screen bg-[#19222e] flex flex-col space-x-2 items-center shadow-xl shadow-bg-[#95c4fe] rounded-sm fixed">
            <div className="ml-4 flex flex-none w-screen h-full">
                <div className="w-1/2"></div>
                <div className="w-full h-full flex space-x-8 justify-center items-center">
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('')}>Home</button>
                </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('analytics')}>Analytics</button>
                </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('form')}>Form</button>
                </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('History')}>History</button>
                </div>
                <div>
                    <button className="text-lg text-[#95c4fe] hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={() => handleClick('Friends')}>Friends</button>
                </div>
<div class="rounded-lg bg-gray-400 h-2/3 w-24">
</div>
                </div>

                <div className="w-1/2 relative flex h-full justify-center items-center">
                    <button className="text-lg text-[#95c4fe] absolute right-0 mr-10 hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={(e) => {
                            setShowProfile(!showProfile)
                        }
                    }>
                        <div className="flex justify-center items-center h-8">
                            <div className="h-8">
                                <img
                                    className="rounded-2xl"
                                    alt={'profile pic'}
                                    src={user ? user.photoURL : '/profile.png'}
                                    height={32}
                                    width={32}
                                />
                            </div>
                            <div className="h-full ml-2">
                                { user ?
                                    user.displayName
                                :
                                    'Guest'
                                }
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            { showProfile &&
            <div className="w-screen flex flex-none flex-col right-0 items-end rounded-sm mt-1">
                <div className="w-28 bg-[#95c4fe] mr-4">
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