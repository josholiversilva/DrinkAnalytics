import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Item = ({ itemType, drinks, restaurantIdToName }) => {
  var itemLabels = {}
  console.log(itemType)

  drinks.map(item => {
    if (itemType === 'Drinks')
      itemLabels[item.name] === undefined ? itemLabels[item.name] = 1 : itemLabels[item.name] += 1
    else if (itemType === 'Restaurants')
      itemLabels[restaurantIdToName[item.restaurantid]] === undefined ? itemLabels[restaurantIdToName[item.restaurantid]] = 1 : itemLabels[restaurantIdToName[item.restaurantid]] += 1
    else
      itemLabels[item.name] === undefined ? itemLabels[item.name] = 1 : itemLabels[item.name] += 1
  })

  const options = {
    responsive: true
  };

  console.log('itemlabels:', itemLabels)
    const itemData = {
        labels: Object.keys(itemLabels),
        datasets: [
          {
            label: '# of Drinks',
            data: Object.values(itemLabels),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Pie 
            data={itemData}
        />
      </div>
    )
}

export default Item