const apiRoute = 'api/restaurant/new'

const updateRestaurant = async (newRestaurant) => {
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

const createNewRestaurant = async (newRestaurant) => {
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