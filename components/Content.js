import React, { useState } from 'react'
import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'
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
                        <Image className={inner.round}
                            alt="Drink Image"
                            src={"/test.jpeg"}
                            width={150}
                            height={150}
                        />
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>Mango Milk Tea</h2>
                    <p>25% sugar, less ice, sub cane sugar with honey, honey boba</p>
                </div>
            </div>

            <div className={inner.mid_left_box}>
                <p>Top Company</p>
                <div className={inner.top_left_box_content_pic}>
                    <Image 
                        alt="Drink Image"
                        src={"/sunright.png"}
                        layout='fill'
                    />
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>Mango Milk Tea</h2>
                    <p>25% sugar, less ice, sub cane sugar with honey, honey boba</p>
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
            </div>
        </>
    )
}

export default Content