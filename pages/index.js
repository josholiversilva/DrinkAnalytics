import Link from 'next/link'
import Head from 'next/head'
import Content from '../components/Content'
import contentStyles from '../styles/Content.module.css'
import styles from '../styles/Layout.module.css'
import nextWeek from '../features/timeType/nextWeek'
import getMonday from '../features/timeType/getMonday'

import { switchTimeType } from '../features/timeType/timeTypeSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ drinks, restaurants }) {
  const { time } = useSelector(state => state.timeType)
  const d = new Date();
  const dispatch = useDispatch();

  // Display the current time type selected from user
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  function handleCurrent() {
    if (time == 'y')
      return d.getFullYear();
    else if (time == 'm')
      return monthNames[d.getMonth()];
    else {
      const nextWeekDate = nextWeek(d)
      const lastMonday = getMonday(d)
      const nextMonday = getMonday(nextWeekDate)
      return `${d.getMonth()+1}/${lastMonday.getDate()}-${nextWeekDate.getMonth()+1}/${nextMonday.getDate()}`
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={contentStyles.selections}>
        <button className={contentStyles.selection} onClick={() => dispatch(switchTimeType('y'))} href="/">Year</button>
        <button className={contentStyles.selection} onClick={() => dispatch(switchTimeType('m'))} href="/">Month</button>
        <button className={contentStyles.selection} onClick={() => dispatch(switchTimeType('w'))} href="/">Week</button>
        <button className={contentStyles.current}>{handleCurrent()}</button>
      </div>
      <div className={contentStyles.box}>
        <Content drinks={drinks} />
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:3001/drinks')
  const drinks = await res.json()

  const res_2 = await fetch('http://localhost:3001/restaurants')
  const restaurants = await res_2.json()

  return {
    props: {
      drinks,
      restaurants
    }
  }
}