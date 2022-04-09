import React, { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Header = () => {
    const [showProfile, setShowProfile] = useState(false)
    const router = useRouter()
    const handleClick = (pageRef) => {
        router.push(`/${pageRef}`)
    }
    const lazyRoot = React.useRef(null)
    const { data: session } = useSession()
    return (
        <div className="h-10 w-screen bg-[#19222e] border-b-2 border-[#95c4fe] flex flex-col space-x-2 items-center shadow-xl shadow-bg-[#95c4fe] rounded-sm fixed">
            <div className="ml-4 flex space-x-2 w-screen">
                <div className="border-6 border-black">
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('')}>Home</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('analytics')}>Analytics</button>
                </div>
                <div className="text-[#95c4fe]"> | </div>
                <div>
                    <button className="text-lg text-[#95c4fe]" onClick={() => handleClick('form')}>Form</button>
                </div>
                <div className="w-full relative">
                    <button className="text-lg text-[#95c4fe] absolute right-0 mr-4 hover:bg-gray-500 pl-1 pr-1 rounded-lg" onClick={(e) => {
                            setShowProfile(!showProfile)
                        }
                    }>
                        <Image 
                            src={session.user.image}
                            height={24}
                            width={24}
                        />
                        <span className="ml-2">{session.user.firstname}</span>
                    </button>
                </div>
            </div>
            { showProfile &&
            <div className="w-screen flex flex-col right-0 items-end rounded-sm mt-1">
                <div className="w-24 bg-[#95c4fe]">
                    <div className="">
                        <button className="text-lg w-full hover:bg-gray-200" onClick={(e) => {
                                e.preventDefault()
                                signOut()
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