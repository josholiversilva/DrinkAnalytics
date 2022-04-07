import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

require('datejs')

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Spending = ({ data, time }) => {
  var spending = 0
  var dates = {}

  data.filter(item => {
      spending += item.cost
      var dateSplit = item.date.split(' ')
      if (time === 'y') {
        var x = new Date.parse(`${dateSplit.join('T')}Z`).getMonth()
        dates[x] === undefined ? dates[x] = spending : dates[x] += spending
      }
      else if (time === 'm') {
        var x = new Date.parse(`${dateSplit.join('T')}Z`).getDate()
        console.log('MONTH DATE-', x)

        if (x < 0 && x >= 8) 
          dates['Week 1'] === undefined ? dates['Week 1'] = spending : dates['Week 1'] += spending
        else if (x < 8 && x >= 16)
          dates['Week 2'] === undefined ? dates['Week 2'] = spending : dates['Week 2'] += spending
        else if (x < 16 && x >= 24)
          dates['Week 3'] === undefined ? dates['Week 3'] = spending : dates['Week 3'] += spending
        else
          dates['Week 4'] === undefined ? dates['Week 4'] = spending : dates['Week 4'] += spending
      }
      else {
        var x = new Date.parse(`${dateSplit.join('T')}Z`).getDay()
        dates[x] === undefined ? dates[x] = spending : dates[x] += spending
      }
  })

  const options = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: 'Spending'
        },
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        }
      },
    };
      
  const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  var labels = []
  if (time === 'y')
    labels = year
  else if (time === 'm')
    labels = month
  else
    labels = day

  const spendingData = {
    labels,
    datasets: [
      {
        label: 'Drinks',
        data: labels.map((label, idx) => {
          if (time === 'y')
            return dates[idx] === undefined ? 0 : dates[idx]
          else if (time === 'm')
            return dates[label] === undefined ? 0 : dates[label]
          else
            return dates[idx+1] === undefined ? 0 : dates[idx+1]
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      }
    ],
  };
      
  return (
    <>
      <Line options={options} data={spendingData} />
    </>
  )
}

export default Spending;