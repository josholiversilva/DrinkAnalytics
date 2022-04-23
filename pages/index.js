import React from 'react'
import ChangeDate from '../components/ChangeDate'
import { useSelector } from 'react-redux'
import { useAuth } from '../firebase/auth'
import firebase from 'firebase/app'
import ContentCard from '../components/ContentCard'

require('datejs')

export default function Home() {
  const { time, offset, timeDate } = useSelector(state => state.timeType)
  const { user } = useAuth()

  const contents = [
    {
      user: 'Josh Silva', 
      item: 'Jasmine Milk Tea', 
      place: 'Ding Tea', 
      description: 'Good stuff!', 
      review: '4.4', 
      cost: '5.20', 
      comments: [], 
      pic: ''
    }
  ]

  return (
    <>
      <div className="h-full w-screen flex items-center justify-center">
        <div className="h-full space-x-8 inline-block justify-center items-center">
          <div className="float-left fixed w-36 h-full w-screen flex shrink overflow-auto justify-end">
              <div className="h-full flex-col">
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Add Group</div>
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Groups</div>
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Groups</div>
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Groups</div>
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Groups</div>
                  <div className="w-full hover:bg-blue-200 h-10 text-white">Discover Groups</div>
              </div>
          </div>
          <div className="flex h-full pl-36 float-left" style={{width: '52rem'}}>
            <div className="flex-col space-y-12 w-full h-full flex-none shrink-0">
                <ContentCard {...contents[0]} />
                <ContentCard {...contents[0]} />
            </div>
          </div>
          <div className="w-96 h-full flex float-left">
              <div className="w-1/2 h-full">
                <div className="w-full h-1/4 bg-black mb-4 rounded-sm"></div>
                <div className="w-full h-1/4 bg-blue-200 mb-4"></div>
                <div className="w-full h-1/4 bg-red-200 mb-4"></div>
              </div>
              <div className="w-1/2 h-full"></div>
          </div>
        </div>
      </div>
    </>
  )
}