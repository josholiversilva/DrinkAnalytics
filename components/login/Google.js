import Image from 'next/image';
import google_icon from '../../public/google_icon.png'
import { signIn } from 'next-auth/react';

const Google = () => {
    return (
        <>
            <button className="border-2 border-white rounded-lg p-2 flex space-x-2" onClick={() => signIn(['google'])}>
                <div>
                    <Image
                        src={google_icon}
                        width={24}
                        height={24}
                    />
                </div>
                <div className="text-center h-full">
                    Login With Google
                </div>
            </button>
        </>
    )
}

export default Google;