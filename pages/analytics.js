import React, { useState } from 'react'
import ItemTable from '../components/analytics/ItemTable'
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

        <div className="w-screen flex mt-12">
          <ItemTable />
        </div>
      </>
  )
}

export default drinks;