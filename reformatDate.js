
var reformatDate = function(date) {
    
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let dayNum
    let monthNum
    let monthNumStr
    let monthWord
    let yearNum

    function monthConvert() {
        for (i = 0; i < 12; i++) {
            if (monthWord == month[i]) {
                monthNum = i + 1
                if (monthNum < 10) {
                    monthNumStr = monthNum.toString()
                    monthNumStr = `0${monthNum}`
                } else {
                    monthNumStr = monthNum.toString()
                }
                break;
            }        
        }
    }

    if (date.length === 12) {
        dayNum =  date.substr(0, 1)
        yearNum = date.substr(8, 4)
        monthWord = date.substr(4, 3)

        dayNum = `0${dayNum}`
        monthConvert()
    } else if (date.length === 13) {
        dayNum =  date.substr(0, 2)
        yearNum = date.substr(9, 4)
        monthWord = date.substr(5, 3)

        monthConvert()
    }
    let result = `${yearNum}-${monthNumStr}-${dayNum}`
    // console.log(result)
    // console.log(dayNum)
    // console.log(monthWord)
    // console.log(month[9])
    // console.log(monthNum)
    // console.log(monthNumStr)
    // console.log(yearNum)
    return result
};

reformatDate("20th Mar 2052")