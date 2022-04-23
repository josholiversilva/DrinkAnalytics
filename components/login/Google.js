import Image from 'next/image';
import google_icon from '../../public/google_icon.png'
import { signIn } from 'next-auth/react';
import firebase from 'firebase/app'
import firebaseClient from '../../firebase/clientApp';


const Google = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return (
        <>
            <button className="border-2 border-white rounded-lg p-2 flex space-x-2" onClick={async () => await firebase.auth().signInWithRedirect(provider)}>
                <div>
                    <Image
                        alt={'Picture Of Google Logo'}
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