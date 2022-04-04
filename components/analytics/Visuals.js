import React, { useState } from 'react'
import Item from './Visuals/Item'
import Spending from './Visuals/Spending'

const Visuals = ({ visType }) => {
    const showVisual = {
        'Items': <Item />,
        'Spending': <Spending />
    }
    return (
        showVisual[visType]
    )
}

export default Visuals;