import React from 'react'
import Content from '../components/index/Content'
import ChangeDate from '../components/ChangeDate'

require('datejs')

export default function Home({ drinks, restaurants, trdw, trdm, trdy, trrw, trrm, trry }) {
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