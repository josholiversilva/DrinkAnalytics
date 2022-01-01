import React, { useState } from 'react'
import Image from 'next/image'
import inner from '../styles/Inner.module.css'
import styles from '../styles/Layout.module.css'

const Content = (props) => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        counter++
        setCounter(counter)
    }
    return (
        <>
            <div className={inner.top_box}>
                <div className={styles.card2}>
                    <p>150 Calories</p>
                </div>
                <div className={styles.card2}>
                    <p>240 USD Spent</p>
                </div>
                <div className={styles.card2}>
                    <p>50 Drinks</p>
                </div>
                <div className={styles.card2}>
                    <p>20 Companies</p>
                </div>
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
                </div>
            </div>

            <div className={inner.mid_left_box}>
                <p>Top Company</p>
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
                    <p>4 Stars</p>
                    <p>Review Count</p>
                    <p>2 Dollar Signs </p>
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
                    <h1>Top 3 Companies</h1>
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