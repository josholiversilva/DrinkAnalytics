import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { getTimeDate } from '../../features/timeType/getTimeDate';
import { formatToCurrency } from '../../features/currency/convertToDollar'
import { getDrinks, getDrinksWithinDate, getRestaurants } from '../../features/content/getData';
import { useSession } from 'next-auth/react';

const Content = (props) => {
    const { data: session } = useSession()
    const { time, offset } = useSelector(state => state.timeType)

    const router = useRouter()
    const handleAnalyticChange = (analyticChange) => {
        router.push(`/${analyticChange}`)
    }

    const { isGuest } = useSelector(state => state.login)
    var userEmail = ''
    if (isGuest)
        userEmail="guest@guest.com"
    else
        userEmail=session.user.email
    
    const timeDate = getTimeDate(time, offset)
    const { drinks, errorDrinks } = getDrinksWithinDate(userEmail, time, timeDate) // getDrinks(userEmail)
    const { restaurants, errorRestaurants } = getRestaurants(userEmail)

    var spending = 0
    var drinkSet = new Set()
    var restaurantSet = new Set()

    if (errorDrinks || errorRestaurants) return <div className="text-white">Failed to load</div>
    if (!drinks || !restaurants) return <div className="text-white">Loading...</div>

    const updates = []
    drinks.filter(d => {
        spending += d.cost
        drinkSet.add(d.name)
        restaurantSet.add(d.restaurantid)
        var restaurantName = ''
        restaurants.filter(r => {if (r.id === d.restaurantid) restaurantName=r.name})
        if (updates.length < 10) {
            const updateText = `[${d.date}] Bought ${d.name} for ${formatToCurrency(d.cost)} at ${restaurantName} ${d.description === null ? '' : 'with ' + d.description}`
            updates.push(updateText)
        }
    })
    const drinkCount = drinkSet.size
    const restaurantCount = restaurantSet.size

    return (
        <> 
            <div className="flex-col space-y-4 justify-center items-center pt-4 pb-12 shadow-sm shadow-white">
                <div className="flex space-x-2 w-full items-center justify-center">
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{Math.max(drinkCount, restaurantCount)} Rankings</span>
                        </div>
                    </button>
                    <button onClick={() => handleAnalyticChange('analytics')} className="shadow-lg bg-[#95c4fe] w-1/4 h-24 rounded-md">
                        <div>
                            <span>{formatToCurrency(spending)} USD</span>
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
                                <div className="text-[#95c4fe] w-1/2 text-lg shadow-md rounded-lg p-2 shadow-gray-200">
                                    {update}
                                </div>
                            </div>
                        )
                    })
                    .reverse()
                }
            </div>
        </>
    )
}

export default Content