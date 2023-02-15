var daysBetweenDates = function(date1, date2) {
    let firstDate = new Date(date1)
    let secondDate = new Date(date2)
    let diffInMs
    let diffInDays
    
    if (firstDate < secondDate) {
        diffInMs = secondDate - firstDate
    } else if (firstDate > secondDate) {
        diffInMs = firstDate - secondDate
    } else {
        diffInMs = 0
    }

    diffInDays = diffInMs / (24 * 60 * 60 * 1000)
    console.log(diffInDays)
    return diffInDays
};

daysBetweenDates("2019-06-29", "2019-06-30")