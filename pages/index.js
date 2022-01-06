import Link from 'next/link'
import Head from 'next/head'
import Content from '../components/Content'
import contentStyles from '../styles/Content.module.css'
import styles from '../styles/Layout.module.css'

import { switchTimeType } from '../features/timeType/timeTypeSlice'
import { useDispatch, useSelector } from 'react-redux';

require('datejs')

export default function Home({ drinks, restaurants }) {
  const { time } = useSelector(state => state.timeType)
  const dispatch = useDispatch();

  // Display the current time type selected from user
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  function handleCurrent() {
    if (time == 'y')
      return Date.today().getFullYear();
    else if (time == 'm')
      return monthNames[Date.today().getMonth()];
    else {
      return `${Date.today().getMonth()+1}/${Date.last().monday().getDate()} - ${Date.next().monday().getMonth()+1}/${Date.next().monday().getDate()}`
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