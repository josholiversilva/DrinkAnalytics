import React, { useState } from 'react'
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
            </div>

            <div className={inner.top_left_box}>
                Favorite Drink
                <div className={inner.top_left_box_content_pic}>
                    Pic {counter}
                    <button onClick={increment}>Increment</button>
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>Mango Milk Tea</h2>
                    <p>25% sugar, less ice, sub cane sugar with honey, honey boba</p>
                </div>
            </div>

            <div className={inner.mid_left_box}>
                Top Company: Sunright<br />
                Total Calories: 1200<br />
                Total Paid: 120$<br />
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

                <div className={styles.card2} style={{}}>
                    <h1>History</h1>
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />

                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                    Mango Milk Tea from Sunright 10/20/20<br />
                </div>

            </div>

            <div className={inner.bottom_left_box}>
                Drinks
            </div>

            <div className={inner.bottom_right_box}>
                Analytics
            </div>

            <div>
                <p>
                    Content
                </p>
            </div>
        </>
    )
}

export default Content