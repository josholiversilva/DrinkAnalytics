import React, { useState, useEffect } from 'react'
import ItemTable from '../components/analytics/ItemTable'
import VisualBar from '../components/analytics/VisualBar'
import Visuals from '../components/analytics/Visuals'
import ChangeDate from '../components/ChangeDate'
import { useSelector } from 'react-redux';
import useSWR from 'swr'
import { getTimeDate } from '../features/timeType/getTimeDate'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const analytics = () => {
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

  const { time, offset, timeDate } = useSelector(state => state.timeType)
  const d = getTimeDate(time, offset)
  
  const { data, error } = useSWR(`http://localhost:3001/drinks/${time}/${d}`, fetcher)

  if (error) return <div className="w-full flex items-center justify-center mt-2 text-white">Unable to Receive Info...</div>
  if (!data) return <div className="w-full flex items-center justify-center mt-2 text-white">Loading...</div>

  return (
      <>
        <div className="w-full flex items-center justify-center mt-2">
            <div className="w-96 h-96">
              <Visuals visType={visMap[vis]} vis={vis} data={data} />
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
            <ChangeDate time={time} offset={offset} timeDate={timeDate} />
          </div>
        </div>

        <div className="w-screen flex mt-12">
          <ItemTable data={data} />
        </div>
      </>
  )
}

export default analytics;