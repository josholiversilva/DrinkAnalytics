import React, { useState } from 'react'
import ItemTable from '../components/analytics/ItemTable'
import VisualBar from '../components/analytics/VisualBar'
import Visuals from '../components/analytics/Visuals'
import ChangeDate from '../components/ChangeDate'
import { useSelector } from 'react-redux';
import { getTimeDate } from '../features/timeType/getTimeDate'
import { getDrinks, getDrinksWithinDate, getRestaurants } from '../features/content/getData'
import { useSession } from 'next-auth/react'

const analytics = () => {
  const { data: session } = useSession()
  const [vis, setVis] = useState('Drinks')
  const handleChangeVis = (newVis) => {
    setVis(newVis)
  }

  const visMap = {
    'Drinks': 'Items',
    'Restaurants': 'Items',
    'Spending': 'Spending',
    'Ranking': 'Ranking'
  }

  const { time, offset } = useSelector(state => state.timeType)
  
  const { isGuest } = useSelector(state => state.login)
  var userEmail = ''
  if (isGuest)
    userEmail="guest@guest.com"
  else
    userEmail=session.user.email

  const timeDate = getTimeDate(time, offset)
  const { drinks, errorDrinks } = getDrinksWithinDate(userEmail, time, timeDate)
  const { restaurants, errorRestaurants } = getRestaurants(userEmail)

  if (errorDrinks || errorRestaurants) return <div className="w-full flex items-center justify-center mt-2 text-white">Unable to Receive Info...</div>
  if (!drinks || !restaurants) return <div className="w-full flex items-center justify-center mt-2 text-white">Loading...</div>

  var rIdToName = {}
  restaurants.map(r => {
    rIdToName[r.id] = r.name
  })

  const drinkSize = Object.keys(drinks).length

  return (
      <>
        <div className="w-full flex items-center justify-center mt-2">
            <div className="w-96 h-96">
              { drinkSize > 0 ? 
                <Visuals visType={visMap[vis]} vis={vis} time={time} drinkSize={drinkSize} drinks={drinks} restaurantIdToName={rIdToName} restaurants={restaurants} />
                :
                <>
                  <div className="flex h-full w-full justify-center items-center">
                    <div className="text-white text-xl">Empty</div>
                  </div>
                </>
              }
            </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col">
            <VisualBar currVis={vis} vis={'Drinks'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Spending'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Restaurants'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Ranking'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
          </div>
          <div className="w-1/2 mt-4 flex flex-col">
            <ChangeDate time={time} offset={offset} timeDate={timeDate} />
          </div>
        </div>

        <div className="w-screen flex mt-12">
          <ItemTable drinks={drinks} restaurants={rIdToName} />
        </div>
      </>
  )
}

export default analytics;