import React, { useState } from 'react'
import Image from 'next/image'
import left_arrow from '../public/left_arrow.png'
import right_arrow from '../public/right_arrow.png'
import { useDispatch, useSelector } from 'react-redux';
import { changeOffset } from '../features/timeType/timeTypeSlice';
import { switchTimeType } from '../features/timeType/timeTypeSlice'

require('datejs')

const ChangeDate = () => {
    const { time, offset } = useSelector(state => state.timeType)

    // Display the current time type selected from user
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    function handleCurrent() {
        if (time == 'y') {
            return Date.today().getFullYear()+offset[time];
        }
        else if (time == 'm') {
            return `${monthNames[Date.today().getMonth()+offset[time]]} ${Date.today().getFullYear()+offset['y']}`;
        }
        else {
            var currDate = Date.today()
            // console.log(currDate.getMonth(), currDate.getDate())
            // if ((currDate.getMonth() === 0) && (currDate.getDate() < 0 && currDate.getDate() <= 7))
                // return `${currDate.last().monday().getMonth()+1}/${currDate.getDate()} - ${currDate.next().monday().getMonth()+1}/${currDate.getDate()}`

            for (var x=0; x<Math.abs(offset[time]); x++) {
                if (offset[time] < 0) {
                    currDate = new Date(currDate - 7 * 24 * 60 * 60 * 1000)
                }
                else
                    currDate = new Date(currDate + 7 * 24 * 60 * 60 * 1000)
            }
            const newDate = Date.parse(currDate)
            return `${newDate.last().monday().getMonth()+1}/${newDate.getDate()} - ${newDate.next().monday().getMonth()+1}/${newDate.getDate()}`
        }
    }

    const dispatch = useDispatch();
    const handleChangeOffset = (amnt) => {
        if (time === 'w') {
            if (offset['w'] !== 0 || amnt < 0)
                dispatch(changeOffset(amnt))
        }
        else if (time === 'm') {
            const currMonth = Date.today().getMonth()+offset[time]
            if ((currMonth === 0 && amnt < 0) || (currMonth === 11 && amnt > 0))
                dispatch(changeOffset(0))
            else
                dispatch(changeOffset(amnt))
        }
        else if (time === 'y') {
            const currYear = Date.today().getFullYear()+offset[time]
            if (currYear === 2000 && amnt < 0)
                dispatch(changeOffset(0))
            else
                dispatch(changeOffset(amnt))
        }
    }
    const [showArrows, setShowArrows] = useState(false)

    return (
        <>
            <div className="text-[#95c4de] text-4xl w-full text-center font-bold outline-4 outline-gray-300 flex space-x-3 items-center justify-center" onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
                { showArrows &&
                    <button onClick={() => handleChangeOffset(-1)}>
                        <div>
                            <Image
                                src={left_arrow}
                                width={25}
                                height={25}
                            />
                        </div>
                    </button>
                }
                <button onClick={() => setShowArrows(true)}>
                    <div>
                        {handleCurrent()}
                    </div>
                </button>
                { showArrows &&
                    <button onClick={() => handleChangeOffset(1)}>
                        <div>
                            <Image
                                src={right_arrow}
                                width={25}
                                height={25}
                            />
                        </div>
                    </button>
                }
            </div>
            <div className="flex h-8 w-full justify-center items-center mt-3">
                <div className="flex space-x-2 h-8 w-1/6 items-center justify-center text-[#95c4de]">
                { time === 'y' ?
                    <button className="border-2 border-white rounded-lg p-1" onClick={() => dispatch(switchTimeType('y'))} href="/">Year</button>
                :
                    <button onClick={() => dispatch(switchTimeType('y'))} href="/">Year</button>
                }
                { time === 'm' ?
                    <button className="border-2 border-white rounded-lg p-1" onClick={() => dispatch(switchTimeType('m'))} href="/">Month</button>
                :
                    <button onClick={() => dispatch(switchTimeType('m'))} href="/">Month</button>
                }
                { time === 'w' ?
                    <button className="border-2 border-white rounded-lg p-1" onClick={() => dispatch(switchTimeType('w'))} href="/">Week</button>
                :
                    <button onClick={() => dispatch(switchTimeType('w'))} href="/">Week</button>
                }
                </div>
            </div>
        </>
    )
}

export default ChangeDate