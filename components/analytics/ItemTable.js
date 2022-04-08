import React from 'react'

const ItemTable = ({ data }) => {
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
                            <div key={idx} className={`flex ${idx % 2 === 0 ? 'bg-gray-500' : ''} rounded-lg mt-2 transition ease-in-out duration-500 hover:bg-[#95c4fe] fade-in`}>
                                <div key={item.name-idx} className="text-white w-1/4 font-bold text-sm">{item.name}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{item.restaurantid}</div>
                                <div className="text-white w-1/4 font-bold text-sm">{item.cost}</div>
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