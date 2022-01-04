const apiRoute = '/api/restaurant/new'

const updateRestaurant = async (restaurant, rating) => {
    console.log(`Client side: restaurant=${restaurant} & rating=${rating}`)

    var newRestaurant = {
      restaurant: restaurant,
      rating: rating
    }

    const response = await fetch(apiRoute, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRestaurant)
    })
    const data = await response.json()

    return data
}

const createNewRestaurant = async (restaurant, rating) => {
  const newRestaurant = {
    restaurant: restaurant,
    rating: rating
  }
  console.log("INSIDE NEW RESTAURANT")
  console.log(newRestaurant)
  const response = await fetch(apiRoute, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRestaurant)
  })
  const data = await response.json()

  return data
}

export { updateRestaurant, createNewRestaurant }