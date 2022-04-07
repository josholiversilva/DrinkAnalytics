import React from 'react'
import { useSelector } from 'react-redux'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ItemTable = () => {
    const { time, timeDate } = useSelector(state => state.timeType)

    const { data, error } = useSWR(`http://localhost:3001/drinks/${time}/${timeDate[time]}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log('data:', data)

    return(
        <div className="flex flex-col w-screen h-full">
            <div className="flex">
                <div className="text-white w-1/4 font-bold text-lg">Drink</div>
                <div className="text-white w-1/4 font-bold text-lg">Location</div>
                <div className="text-white w-1/4 font-bold text-lg">Cost</div>
                <div className="text-white w-1/4 font-bold text-lg">Bought</div>
                <div className="text-white w-1/4 font-bold text-lg">Calories</div>
            </div>
            {
                data.map((item, idx) => {
                    return (
                        <>
                            <div className="flex bg-gray-500 rounded-lg mt-2">
                                <div key={idx} className="text-white w-1/4 font-bold text-sm">{item.name}</div>
                                <div key={idx} className="text-white w-1/4 font-bold text-sm">{item.restaurantid}</div>
                                <div key={idx} className="text-white w-1/4 font-bold text-sm">{item.cost}</div>
                                <div key={idx} className="text-white w-1/4 font-bold text-sm">{item.date}</div>
                                <div key={idx} className="text-white w-1/4 font-bold text-sm">{0}</div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ItemTable;