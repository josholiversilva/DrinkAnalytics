import React from 'react'
import Content from '../components/index/Content'
import ChangeDate from '../components/ChangeDate'
import { useSelector } from 'react-redux'

require('datejs')

export default function Home() {
  const { time, offset, timeDate } = useSelector(state => state.timeType)

  return (
    <>
      <ChangeDate time={time} offset={offset} timeDate={timeDate} />
      <Content />
    </>
  )
}