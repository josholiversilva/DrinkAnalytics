import React, { useState } from 'react'
import VisualBar from '../components/analytics/VisualBar'
import Visuals from '../components/analytics/Visuals'
import ChangeDate from '../components/ChangeDate'

const drinks = () => {
  const [vis, setVis] = useState('Drinks')
  const handleChangeVis = (newVis) => {
    setVis(newVis)
  }

  const visMap = {
    'Drinks': 'Items',
    'Restaurants': 'Items',
    'Spending': 'Spending',
    'Health': 'Items'
  }

  return (
      <>
        <div className="w-full flex items-center justify-center mt-2">
            <div className="w-96 h-96">
              <Visuals visType={visMap[vis]} />
            </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col">
            <VisualBar currVis={vis} vis={'Drinks'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Spending'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Restaurants'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
            <VisualBar currVis={vis} vis={'Health'} visMap={visMap} onHandleChangeVis={handleChangeVis} />
          </div>
          <div className="w-1/2 mt-4 flex flex-col">
            <ChangeDate />
          </div>
        </div>

        <div className="h-full w-screen flex mt-12">
            <div className="flex flex-col w-screen h-full">
                <div className="flex">
                    <div className="text-white w-1/4 font-bold text-lg">Drink</div>
                    <div className="text-white w-1/4 font-bold text-lg">Location</div>
                    <div className="text-white w-1/4 font-bold text-lg">Cost</div>
                    <div className="text-white w-1/4 font-bold text-lg">Bought</div>
                    <div className="text-white w-1/4 font-bold text-lg">Calories</div>
                </div>
                <div className="flex bg-gray-500 rounded-lg mt-2">
                    <div className="text-white text-sm w-1/4">Strawberry Milk Tea</div>
                    <div className="text-white text-sm w-1/4">7 Leaves</div>
                    <div className="text-white text-sm w-1/4">$4.20</div>
                    <div className="text-white text-sm w-1/4">4/20/21</div>
                    <div className="text-white text-sm w-1/4">150</div>
                </div>
            </div>
        </div>
      </>
  )
}

export default drinks;