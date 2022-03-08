import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import inner from '../styles/Inner.module.css'
import styles from '../styles/Layout.module.css'
import { useSelector } from 'react-redux';
import { getSpending, getDrinkCount, getRestaurantCount } from '../features/content/getContentAPI'

const Content = (props) => {
    const { time } = useSelector(state => state.timeType)
    const topDrinkTime = {
        'w': props.trdw[0],
        'm': props.trdm[0],
        'y': props.trdy[0]
    }
    const topRestaurantTime = {
        'w': props.trrw[0],
        'm': props.trdm[0],
        'y': props.trdy[0]
    }

    const spending = `${getSpending(time, props.drinks)} USD Spent`
    const drinkCount = `${getDrinkCount(time, props.drinks)} Drinks`
    const restaurantCount = `${getRestaurantCount(time, props.drinks)} Restaurants`
    const topDrink = topDrinkTime[time]
    const topRestaurant = topRestaurantTime[time]
    console.log("Top Restaurant:", topRestaurant)

    const updates = ['7.20$ spent at Sunright Tea Studio', 
        '4.50$ spent at 7 Leaves', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio'
    ]

    return (
        <> 
            <div className="flex-col space-y-4 justify-center items-center pt-12 h-full">
                <div className="text-white text-2xl w-full text-center">2022</div>
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button className="bg-white w-1/4 h-12">
                        <div>
                            <span>150 Calories</span>
                        </div>
                    </button>
                    <button className="bg-white w-1/4 h-12">
                        <div>
                            <span>{spending}</span>
                        </div>
                    </button>
                </div>
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button className="bg-white w-1/4 h-12">
                        <div>
                            <span>{drinkCount}</span>
                        </div>
                    </button>
                    <button className="bg-white w-1/4 h-12">
                        <div>
                            <span>{restaurantCount}</span>
                        </div>
                    </button>
                </div>
            </div>


            <div className="flex-col space-y-4 justify-center items-center mt-24 bg-[#19222e]">
                <div className="flex w-full justify-center items-center">
                    <div className="text-white w-1/2 border-b-2 border-white text-lg">
                        Latest Updates
                    </div>
                </div>
                {
                    updates.map(update => {
                        return (
                            <div className="flex w-full justify-center items-center">
                                <div className="text-white w-1/2 text-lg bg-gray-400">
                                    {update}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

/*
<div className={inner.top_left_box}>
                
                <div className={inner.top_left_box_content_pic}>
                    <p>Favorite Drink</p>
                    <div className={inner.pic}>
                        <img className={inner.round}
                            alt="Drink Image"
                            src={"/test.jpeg"}
                        />
                    </div>
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>{topDrink.name}</h2>
                    <p>{topDrink.desc}</p>
                    <p>100 Drinks | 400$ Spent</p>
                </div>
            </div>

            <div className={inner.mid_left_box}>
                <div className={inner.bottom_left_box_content_pic}>
                    <p>Favorite Restaurant</p>
                    <div className={inner.pic}>
                        <img className={inner.round}
                            alt="Drink Image"
                            src={"/sunright.jpeg"}
                        />
                    </div>
                </div>
                <div className={inner.top_left_box_content_desc}>
                    <h2>{topRestaurant.name}</h2>
                    <p>{topRestaurant.rating} ⭐ &ensp;| &ensp; 400 💲💲 &ensp; | &ensp;1000 🧋</p>
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
            </div>
            */

export default Content