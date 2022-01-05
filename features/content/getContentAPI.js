import nextWeek from "../timeType/nextWeek"
import getMonday from "../timeType/getMonday"

const getSpending = (timeType, drinks) => {
    const now = new Date()
    const next = nextWeek(now)

    if (timeType == 'y') {
        const totalCost = drinks
            .filter(drink => now.getFullYear() === new Date(drink.date).getFullYear())
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
        
    }
    if (timeType == 'm') {
        const totalCost = drinks
            .filter(drink => now.getMonth() === new Date(drink.date).getMonth())
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
    }
    else {
        const nextMonday = getMonday(nextWeek(now))
        const lastMonday = getMonday(now)
        const totalCost = drinks
            .filter(drink => lastMonday <= Date(drink.date).getDate <= nextMonday)
            .map(drinkF => drinkF.cost)
            .reduce((a,b) => a+b, 0)
        return totalCost
    }
}

export { getSpending }