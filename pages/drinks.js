import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const drinks = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        <div className="h-full w-full flex">
            <div className="h-1/2 w-1/4">
                <Pie data={data} />
            </div>
            <div>
            <div className="flex w-full">
                <div className="text-white">Drink</div>
            </div>
            <table>
                <tr>
                    <th>Drink</th>
                    <th>Restaurant</th>
                    <th>Cost</th>
                    <th>Bought</th>
                </tr>
                <tr>
                    <td className="text-white">Strawberry Milk Tea</td>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>


                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>
                
                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>
                
                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>

                <tr>
                    <td style={{paddingRight:"2rem"}}>Strawberry Milk Tea</td>
                    <td style={{paddingRight:"3.5rem"}}>7 Leaves</td>
                    <td style={{paddingRight:"3.5rem"}}>$4.20</td>
                    <td style={{paddingRight:"2rem"}}>4/20/21</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default drinks;