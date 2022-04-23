import React from 'react'

export default function ContentCard({ user, item, place, description, review, cost, comments, pic }) {
  return (
    <div className="flex w-full h-full bg-gray-300 flex-none shrink-0">
        <div className="text-[#95c4fe] w-full border-b-2 border-[#95c4fe] text-lg flex">
            <div className="h-full w-1/2 flex-col">
                <div className="h-12 text-xl">{user}</div>
                <div className="h-1/4">
                        <span className="text-2xl">{item}</span> <br />
                        {place}
                </div>
                <div className="h-1/2">{description}</div>
                <div className="h-1/6 flex space-x-4">
                    <div>{review}</div>
                    <div>{cost}</div>
                </div>
            </div>
            <div className="h-full w-1/2">
                Bye
            </div>
        </div>
    </div>
  )
}
