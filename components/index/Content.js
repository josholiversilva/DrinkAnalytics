import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { getSpending, getDrinkCount, getRestaurantCount } from '../../features/content/getContentAPI'

const Content = (props) => {
    const { time } = useSelector(state => state.timeType)
    const topDrinkTime = {
        'w': props.trdw ? props.trdw[0] : 0,
        'm': props.trdm ? props.trdm[0] : 0,
        'y': props.trdy ? props.trdy[0] : 0
    }
    const topRestaurantTime = {
        'w': props.trrw ? props.trrw[0] : 0,
        'm': props.trdm ? props.trdm[0] : 0,
        'y': props.trdy ? props.trdy[0] : 0
    }

    const router = useRouter()
    const handleAnalyticChange = (analyticChange) => {
        router.push(`/${analyticChange}`)
    }

    /*
    const spending = `${getSpending(time, props.drinks)} USD Spent`
    const drinkCount = `${getDrinkCount(time, props.drinks)} Drinks`
    const restaurantCount = `${getRestaurantCount(time, props.drinks)} Restaurants`
    const topDrink = topDrinkTime[time]
    const topRestaurant = topRestaurantTime[time]
    console.log("Top Restaurant:", topRestaurant)
    */
   const spending = 0;
   const drinkCount = 0;
   const restaurantCount = 0;

    const updates = ['7.20$ spent at Sunright Tea Studio', 
        '4.50$ spent at 7 Leaves', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio'
    ]

    return (
        <> 
            <div className="flex-col space-y-4 justify-center items-center pt-4 pb-12 h-full shadow-sm shadow-white">
                
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4de] w-1/4 h-24 rounded-md">
                        <div>
                            <span>0 Calories</span>
                        </div>
                    </button>
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4de] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{spending} USD $</span>
                        </div>
                    </button>
                </div>
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4de] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{drinkCount} Drinks</span>
                        </div>
                    </button>
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4de] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{restaurantCount} Restaurants</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-col space-y-4 justify-center items-center pt-12 bg-[#19222e]">
                <div className="flex w-full justify-center items-center">
                    <div className="text-[#95c4de] w-1/2 border-b-2 border-[#95c4de] text-lg">
                        Latest Updates
                    </div>
                </div>
                {
                    updates.map(update => {
                        return (
                            <div className="flex w-full justify-center items-center">
                                <div className="text-[#95c4de] w-1/2 text-lg">
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

export default Content