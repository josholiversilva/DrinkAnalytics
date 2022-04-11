import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const getDrinks = (userEmail) => {
    const { data, error } = useSWR(`http://localhost:3001/users/${userEmail}/drinks`, fetcher)
    return {drinks: data, errorDrinks: error}
}

const getDrinksWithinDate = (userEmail, timeType, timeDate) => {
    const { data, error } = useSWR(`http://localhost:3001/users/${userEmail}/drinks/${timeType}/${timeDate}`, fetcher)
    return {drinks: data, errorDrinks: error}
}

const getRestaurants = (userEmail) => {
    const { data, error } = useSWR(`http://localhost:3001/users/${userEmail}/restaurants`, fetcher)
    return {restaurants: data, errorRestaurants: error}
}

// const getDrinks = (timeType, time, userEmail) => {
    // const { data, error } = useSWR(`http://localhost:3001/drinks/${timeType}/${time}/${userEmail}`, fetcher)
    // return {drinks: data, errorDrinks: error}
// }

// const getRestaurants = (timeType, time, userEmail) => {
    // const { data, error } = useSWR(`http://localhost:3001/restaurants/${timeType}/${time}/${userEmail}`, fetcher)
    // return {restaurants: data, errorRestaurants: error}
// }

export { getDrinks, getRestaurants, getDrinksWithinDate }