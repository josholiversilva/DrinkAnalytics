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