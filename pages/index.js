import Link from 'next/link'
import Head from 'next/head'
import Content from '../components/Content'
import contentStyles from '../styles/Content.module.css'
import styles from '../styles/Layout.module.css'

import { switchTimeType } from '../features/timeType/timeTypeSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const { time } = useSelector(state => state.timeType)
  const dispatch = useDispatch();

  // Display the current time type selected from user
  function handleCurrent() {
    if (time == 'y')
      return "2022"
    else if (time == 'm')
      return "January"
    else
      return "10/12-10/19"
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
        <Content />
      </div>
    </>
  )
}
