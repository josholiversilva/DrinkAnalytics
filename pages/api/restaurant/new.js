export default async function handler(req, res) {
    console.log('INSIDE NEW API')
    switch(req.method) {
        case 'POST':
            console.log('going to send body:', req.body)
            try {
                await fetch('http://localhost:3001/restaurants', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(req.body)
                })
                .then(res => res.status(200).json())
                console.log('POSTED NEW RESTAURANT')
            }
            catch(e) {
                res.status(400).json({message: e || "Caught Error"})
            }
            break
        case 'PUT':
            const response = await fetch('http://localhost:3001/restaurants')
            const reqRestaurant = req.body['restaurant']
            const reqRating = req.body['rating']
            const restaurants = await response.json()

            const currRestaurantRating = restaurants
                .filter(
                    restaurant => restaurant.name.includes(reqRestaurant)
                )
                .map(
                    fRestaurant => {
                        return fRestaurant.rating
                    }
                )
            
            var newRating = ((parseFloat(currRestaurantRating)+parseFloat(reqRating))/2).toFixed(1)
            const newRestaurant = {
                restaurant: reqRestaurant,
                rating: newRating
            }

            try {
                await fetch('http://localhost:3001/restaurants', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newRestaurant)
                })
            }
            catch(e) {
                res.status(400).json({message: e || "Caught Error"})
            }
            finally {
                res.status(200).json(newRestaurant)
            }
            break
        default:
            res.setHeader('Allow', ['PUT', 'POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}