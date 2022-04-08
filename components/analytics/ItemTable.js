import React from 'react'
import { formatToCurrency } from '../../features/currency/convertToDollar'

const ItemTable = ({ drinks, restaurants }) => {
    const dataSize = Object.keys(drinks).length

    return(
        <div className="flex flex-col w-screen h-full">
            <div className="font-bold text-gray-400 flex mb-4">
                <div className="text-white w-1/4 font-bold text-lg"></div>
                <div className="text-white w-1/4 font-bold text-lg"></div>
                <div className="text-white w-1/4 font-bold text-lg"></div>
                <div className="text-white w-1/4 font-bold text-lg"></div>
                <div className="text-gray-400 w-1/4 font-bold text-lg">{dataSize} records</div>
            </div>
            <div className="flex">
                <div className="text-white w-1/4 font-bold text-lg">Drink</div>
                <div className="text-white w-1/4 font-bold text-lg">Location</div>
                <div className="text-white w-1/4 font-bold text-lg">Cost</div>
                <div className="text-white w-1/4 font-bold text-lg">Bought</div>
                <div className="text-white w-1/4 font-bold text-lg">Calories</div>
            </div>
            {   
                drinks.map((item, idx) => {
                    return (
                        <>
                            <div key={idx} className={`flex ${idx % 2 === 0 ? 'bg-gray-500' : ''} rounded-lg mt-2 transition ease-in-out duration-500 hover:bg-[#95c4fe] fade-in`}>
                                <div key={item.name-idx} className="text-white w-1/4 font-bold text-sm">{item.name}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{restaurants[item.restaurantid]}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{formatToCurrency(item.cost)}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{item.date}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{0}</div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ItemTable;