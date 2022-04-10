import React, { useState } from 'react'
import Item from './Visuals/Item'
import Ranking from './Visuals/Ranking'
import Spending from './Visuals/Spending'

const Visuals = ({ visType, vis, drinks, restaurantIdToName, restaurants, time }) => {
    if (visType === 'Items') {
        return (
            <Item drinks={drinks} restaurantIdToName={restaurantIdToName} itemType={vis} />
        )
    }
    else if (visType === 'Ranking') {
        return (
            <Ranking drinks={drinks} restaurants={restaurants} />
        )
    }
    else {
        return (
            <Spending drinks={drinks} restaurants={restaurants} time={time} />
        )
    }
}

export default Visuals;