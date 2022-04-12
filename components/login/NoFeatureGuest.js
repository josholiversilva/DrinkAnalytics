import React from 'react'
import Google from './Google'

const NoFeatureGuest = () => {
    return (
        <>
            <div className="text-white space-y-8 h-screen flex flex-col justify-center items-center">
                <div>Guests don't have access to this feature</div>
                <div>Please Login to Continue</div>
                <Google />
            </div>
        </>
      )
}

export default NoFeatureGuest;