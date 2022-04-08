const Ranking = ({ drinks, time }) => {
    var rankings = [{ 
            'drink': {
                'name': 'mango milk tea',
                'rating': 4.4
            },
            'restaurant': {
                'name': 'yo mama restaurant',
                'rating': 4.1
            }
        },
        {
            'drink': {
                'name': 'oolong milk tea',
                'rating': 3.7
            },
            'restaurant': {
                'name': 'josh restaurant',
                'rating': 3.6
            }
        },
        {
            'drink': {
                'name': 'jasmin milk tea',
                'rating': 3.5
            },
            'restaurant': {
                'name': 'iris restaurant',
                'rating': 3.2
            }
        }
    ]

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex border-b-2 border-white">
                <div className="text-white w-1/4 font-bold text-lg">Rank</div>
                <div className="text-white w-1/3 font-bold text-lg">Drink</div>
                <div className="text-white w-1/2 font-bold text-lg">Restaurant</div>
            </div>
            {   
                rankings.map((item, idx) => {
                    const rank = idx+1
                    console.log(item)
                    return (
                        <>
                            <div key={idx} className={`flex ${idx % 2 === 0 ? 'bg-gray-500' : ''} rounded-lg mt-2 transition ease-in-out duration-500 hover:bg-[#95c4fe] hover:text-black fade-in`}>
                                <div className="text-white w-1/4 font-bold text-xl pl-2">
                                    <div className="border-2 w-1/2 rounded-full flex items-center justify-center">
                                        {rank}
                                    </div>
                                </div>
                                <div className="text-white w-1/3 font-bold text-sm">{item.drink.name} {item.drink.rating}⭐</div>
                                <div className="text-white w-1/2 font-bold text-sm">{item.restaurant.name} {item.restaurant.rating}⭐</div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Ranking;