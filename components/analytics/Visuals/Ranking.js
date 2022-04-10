const Ranking = ({ drinks, restaurants }) => {
    var totalDrinkRatings = {}
    var totalRestaurantRatings = {}

    drinks.map(d => {
        if (totalDrinkRatings[d.name]) {
            totalDrinkRatings[d.name].push(d.rating)
        }
        else {
            totalDrinkRatings[d.name] = []
            totalDrinkRatings[d.name].push(d.rating)
        }
    })

    var totalRestaurantRatings
    restaurants.map(r => {
        if (totalRestaurantRatings[r.name]) {
            totalRestaurantRatings[r.name].push(r.rating)
        }
        else {
            totalRestaurantRatings[r.name] = []
            totalRestaurantRatings[r.name].push(r.rating)
        }
    })

    var rDrinks = {}
    drinks.map(d => {
        rDrinks[d.name] = totalDrinkRatings[d.name].reduce((a,b)=>a+b,0) / totalDrinkRatings[d.name].length
    })

    let sortedDrinkNames = Object.keys(rDrinks);
    sortedDrinkNames.sort((a,b) => {
        return rDrinks[b] - rDrinks[a]
    })

    var rRestaurants = {}
    restaurants.map(r=> {
        rRestaurants[r.name] = totalRestaurantRatings[r.name].reduce((a,b)=>a+b,0) / totalRestaurantRatings[r.name].length
    })

    let sortedRestaurantNames = Object.keys(rRestaurants);
    sortedRestaurantNames.sort((a,b) => {
        return rRestaurants[b] - rRestaurants[a]
    })

    var rankings = []
    for (var x=0; x<Math.max(sortedDrinkNames.length, sortedRestaurantNames.length); x++) {
        var entry = {}
        if (x < sortedDrinkNames.length) {
            entry['drink'] = {
                'name': sortedDrinkNames[x],
                'rating': rDrinks[sortedDrinkNames[x]]
            }
        }
        else {
            entry['drink'] = {
                'name': '',
                'rating': ''
            }
        }
        if (x < sortedRestaurantNames.length) {
            entry['restaurant'] = {
                'name': sortedRestaurantNames[x],
                'rating': rRestaurants[sortedRestaurantNames[x]]
            }
        }
        else {
            entry['restaurant'] = {
                'name': '',
                'rating': ''
            }
        }
        rankings.push(entry)
    }
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex border-b-2 border-white">
                <div className="text-white w-1/4 font-bold text-lg">Rank</div>
                <div className="text-white w-1/3 font-bold text-lg">Drink</div>
                <div className="text-white w-1/2 font-bold text-lg">Restaurant</div>
            </div>
            <div className="overflow-y-auto">
                {   
                    rankings.map((item, idx) => {
                        const rank = idx+1
                        return (
                            <>
                                <div key={idx} className={`flex ${idx % 2 === 0 ? 'bg-gray-500' : ''} rounded-lg mt-2 transition ease-in-out duration-500 hover:bg-[#95c4fe] hover:text-black fade-in`}>
                                    <div className="text-white w-1/4 font-bold text-xl pl-2">
                                        <div className="border-2 w-1/2 rounded-full flex items-center justify-center">
                                            {rank}
                                        </div>
                                    </div>
                                    <div className="text-white w-1/3 font-bold text-sm">{item.drink.name} {item.drink.rating}{item.drink.rating !== '' ? '⭐' : ''}</div>
                                    <div className="text-white w-1/2 font-bold text-sm">{item.restaurant.name} {item.restaurant.rating}{item.restaurant.rating !== '' ? '⭐' : ''}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ranking;