import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import useSWR from 'swr'
import { getTimeDate } from '../../features/timeType/getTimeDate';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Content = (props) => {
    const { time, offset } = useSelector(state => state.timeType)

    const router = useRouter()
    const handleAnalyticChange = (analyticChange) => {
        router.push(`/${analyticChange}`)
    }

    // const spending = `${getSpending(time, props.drinks)} USD Spent`
    // const drinkCount = `${getDrinkCount(time, props.drinks)} Drinks`
    // const restaurantCount = `${getRestaurantCount(time, props.drinks)} Restaurants`
    // const topDrink = topDrinkTime[time]
    // const topRestaurant = topRestaurantTime[time]
    // console.log("Top Restaurant:", topRestaurant)

    const updates = ['7.20$ spent at Sunright Tea Studio', 
        '4.50$ spent at 7 Leaves', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio',
        '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio', '7.20$ spent at Sunright Tea Studio'
    ]

    const d = getTimeDate(time, offset)
    const { data, error } = useSWR(`http://localhost:3001/drinks/${time}/${d}`, fetcher)

    var spending = 0
    var drinkSet = new Set()
    var restaurantSet = new Set()

    if (data) {
        console.log(data)
        data.filter(d => {
            spending += d.cost
            drinkSet.add(d.name)
            restaurantSet.add(d.restaurantid)
        })
    }
    const drinkCount = drinkSet.size
    const restaurantCount = restaurantSet.size

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <> 
            <div className="flex-col space-y-4 justify-center items-center pt-4 pb-12 shadow-sm shadow-white">
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>0 Calories</span>
                        </div>
                    </button>
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{spending} USD $</span>
                        </div>
                    </button>
                </div>
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{drinkCount} Drinks</span>
                        </div>
                    </button>
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{restaurantCount} Restaurants</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-col space-y-4 justify-center items-center pt-12 bg-[#19222e]">
                <div className="flex w-full justify-center items-center">
                    <div className="text-[#95c4fe] w-1/2 border-b-2 border-[#95c4fe] text-lg">
                        Latest Updates
                    </div>
                </div>
                {
                    updates.map((update, idx) => {
                        return (
                            <div key={idx} className="flex w-full justify-center items-center">
                                <div className="text-[#95c4fe] w-1/2 text-lg">
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