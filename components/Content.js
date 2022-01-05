import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import inner from '../styles/Inner.module.css'
import styles from '../styles/Layout.module.css'
import { useSelector } from 'react-redux';
import { getSpending } from '../features/content/getContentAPI'

const Content = (props) => {
    const { time } = useSelector(state => state.timeType)

    const spending = `${getSpending(time, props.drinks)} USD Spent`
    console.log(spending)

    return (
        <>
            <div className={inner.top_box}>
                <div className={styles.card2}> 
                    <Link href="/health">150 Calories</Link>
                </div>
                <button className={styles.card2} href="/spending">
                    <Link href="/spending">{spending}</Link>
                </button>
                <button className={styles.card2} href="/drinks">
                    <Link href="/drinks">50 Drinks</Link>
                </button>
                <button className={styles.card2} href="/restaurants">
                    <Link href="/restaurants">20 Restaurants</Link>
                </button>
            </div>

            <div className={inner.top_left_box}>
                <p>Favorite Drink</p>
                <div className={inner.top_left_box_content_pic}>
                    <div className={inner.pic}>
                        <Image className={inner.round}
                            alt="Drink Image"
                            src={"/test.jpeg"}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>Mango Milk Tea</h2>
                    <p>25% sugar, less ice, sub cane sugar with honey, honey boba</p>
                    <p>100 Drinks | 400$ Spent</p>
                </div>
            </div>

            <div className={inner.mid_left_box}>
                <p>Favorite Restaurant</p>
                <div className={inner.bottom_left_box_content_pic}>
                    <div className={inner.pic}>
                        <Image className={inner.round}
                            alt="Drink Image"
                            src={"/sunright.jpeg"}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>Sunright Tea Bar</h2>
                    <p>City, State</p>
                    <p>4Stars | $$ | 1000</p>
                </div>
            </div>
 
            <div className={inner.top_right_box}>
                <div className={styles.card} style={{position: 'relative', height: '50%', float: 'left', clear: 'both', display:'inline-block'}}>
                    <h1>Top 3 Drinks</h1>
                    1. Mango Milk Tea<br />
                    2. Matcha Oolong<br />
                    3. Jasmine Tea<br />
                </div>

                <div className={styles.card} style={{position: 'relative', height: '50%', float: 'left', clear: 'both', display:'inline-block'}}>
                    <h1>Top 3 Restaurants</h1>
                    1. Sunright Tea Studio<br />
                    2. 7 Leaves<br />
                    3. AU<br />
                </div>

                <div className={styles.card} style={{position: 'relative', height: '50%', float: 'left', clear: 'both', display:'inline-block'}}>
                    <h1>History</h1>
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                    Got some drink for this much money at this location<br />
                </div>
            </div>
        </>
    )
}

export default Content