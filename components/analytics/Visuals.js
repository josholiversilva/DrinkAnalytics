import React, { useState } from 'react'
import Item from './Visuals/Item'
import Spending from './Visuals/Spending'

const Visuals = ({ visType, vis, data, time }) => {
    
    if (visType === 'Items') {
        return (
            <Item data={data} itemType={vis} />
        )
    }
    else {
        return (
            <Spending data={data} time={time} />
        )
    }
}

export default Visuals;