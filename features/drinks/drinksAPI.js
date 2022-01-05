const apiRoute = '/api/drinks/new'

const createNewDrink = async (drink) => {
    console.log(drink)
    const response = await fetch(apiRoute, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(drink)
    })
    const data = await response.json()
  
    return data
}

export { createNewDrink }