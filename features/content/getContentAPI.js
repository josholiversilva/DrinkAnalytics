import Heap from 'heap-js'
require('datejs')

const getSpending = (timeType, drinks) => {
    const now = Date.today()

    if (timeType == 'y') {
        const totalCost = drinks
            .filter(drink => now.getFullYear() === Date.parse(drink.date).getFullYear())
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
    }
    else if (timeType == 'm') {
        const totalCost = drinks
            .filter(drink => now.getMonth() === Date.parse(drink.date).getMonth())
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
    }
    else {
        const totalCost = drinks
            .filter(drink => Date.last().monday() <= Date.parse(drink.date).getTime() && Date.parse(drink.date).getTime() <= Date.next().monday())
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
    }
}

const getDrinkCount = (timeType, drinks) => {
    const now = Date.today()

    if (timeType == 'y') {
        const totalCount = drinks
            .filter(drink => now.getFullYear() === Date.parse(drink.date).getFullYear())
            .reduce((a) => a+1, 0)
        return totalCount
    }
    else if (timeType == 'm') {
        const totalCount = drinks
            .filter(drink => now.getMonth() === Date.parse(drink.date).getMonth())
            .reduce((a) => a+1, 0)
        return totalCount
    }
    else {
        const totalCount = drinks
            .filter(drink => Date.last().monday() <= Date.parse(drink.date).getTime() && Date.parse(drink.date).getTime() <= Date.next().monday())
            .reduce((a) => a+1, 0)
        return totalCount
    }
}

const getRestaurantCount = (timeType, drinks) => {
    const now = Date.today()

    if (timeType == 'y') {
        const restaurantIds = drinks
            .filter(drink => now.getFullYear() === Date.parse(drink.date).getFullYear())
            .map(drinkF => drinkF.restaurantId)
        const totalCount = new Set(restaurantIds)
        return totalCount.size
    }
    else if (timeType == 'm') {
        const restaurantIds = drinks
            .filter(drink => now.getMonth() === Date.parse(drink.date).getMonth())
            .map(drinkF => drinkF.restaurantId)

        const totalCount = new Set(restaurantIds)
        return totalCount.size
    }
    else {
        const restaurantIds = drinks
            .filter(drink => Date.last().monday() <= Date.parse(drink.date).getTime() && Date.parse(drink.date).getTime() <= Date.next().monday())
            .map(drinkF => drinkF.restaurantId)

        const totalCount = new Set(restaurantIds)
        return totalCount.size
    }
}

// Do Some Other Time
// Need to use Max Heap
const getTop3Drinks = (timeType, drinks) => {
}

const getTop3Restaurants = (timeType, drinks) => {
    
}

export { getSpending, getDrinkCount, getRestaurantCount, getTop3Drinks }