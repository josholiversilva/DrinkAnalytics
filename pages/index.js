import React from 'react'
import Content from '../components/index/Content'
import ChangeDate from '../components/index/ChangeDate'

import { switchTimeType } from '../features/timeType/timeTypeSlice'
import { useDispatch } from 'react-redux';

require('datejs')

export default function Home({ drinks, restaurants, trdw, trdm, trdy, trrw, trrm, trry }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex h-8 w-full justify-center items-center">
        <div className="flex space-x-2 h-8 w-1/6 items-center justify-center text-white">
          <button onClick={() => dispatch(switchTimeType('y'))} href="/">Year</button>
          <button onClick={() => dispatch(switchTimeType('m'))} href="/">Month</button>
          <button onClick={() => dispatch(switchTimeType('w'))} href="/">Week</button>
        </div>
      </div>
      <ChangeDate />
      <Content 
        drinks={drinks} 
        trdw={trdw} 
        trdm={trdm} 
        trdy={trdy} 
        trrw={trrw} 
        trrm={trrm} 
        trry={trry} />
    </>
  )
}