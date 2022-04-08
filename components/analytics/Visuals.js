import React, { useState } from 'react'
import Item from './Visuals/Item'
import Ranking from './Visuals/Ranking'
import Spending from './Visuals/Spending'

const Visuals = ({ visType, vis, drinks, restaurants, time }) => {
    if (visType === 'Items') {
        return (
            <Item drinks={drinks} restaurants={restaurants} itemType={vis} />
        )
    }
    else if (visType === 'Ranking') {
        return (
            <Ranking />
        )
    }
    else {
        return (
            <Spending drinks={drinks} restaurants={restaurants} time={time} />
        )
    }
}

export default Visuals;