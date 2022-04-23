require('datejs');

const getTimeDate = (time, offset) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    if (time == 'y') {
        return Date.today().getFullYear()+offset[time];
    }
    else if (time == 'm') {
        const x = `${monthNames[Date.today().getMonth()+offset[time]]} ${Date.today().getFullYear()+offset['y']}`;
        return monthNames.indexOf(monthNames[Date.today().getMonth()+offset[time]])+1
    }
    else {
        let currDate = Date.today()
        for (var x=0; x<Math.abs(offset[time]); x++) {
            if (offset[time] < 0) {
                currDate = new Date(currDate - 7 * 24 * 60 * 60 * 1000)
            }
            else
                currDate = new Date(currDate + 7 * 24 * 60 * 60 * 1000)
        }

        const newDate = Date.parse(currDate)
        var lastMonth = newDate.last().monday().getMonth()+1
        var nxtMonth = newDate.next().monday().getMonth()+1

        if (lastMonth.toString().length <= 1)
            lastMonth = `0${lastMonth}`
        if (nxtMonth.toString().length <= 1)
            nxtMonth = `0${nxtMonth}`

        var lastDate = newDate.last().monday().getDate()
        var nxtDate = newDate.next().monday().getDate()+1

        if (lastDate.toString().length <= 1)
            lastDate = `0${lastDate}`
        if (nxtDate.toString().length <= 1)
            nxtDate = `0${nxtDate}`

        return `${newDate.last().monday().getFullYear()}-${lastMonth}-${lastDate}and${newDate.next().monday().getFullYear()}-${nxtMonth}-${nxtDate}`
    }
}

export { getTimeDate }