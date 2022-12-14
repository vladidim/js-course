function randomInRange() {

    var min
    var max

    function minMax() {
        min = prompt("Enter the min number")
        max = prompt("Enter the max number")

        min = Number(min)
        max = Number(max)

        if (!Number.isInteger(min) || !Number.isInteger(max)) {
            alert("Please enter only an integer for min and max")
            minMax()
        }

        if (min >= max) {
            alert("Min number should be smaller than max number")
            minMax()
        }

    }

    minMax()

    var randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    console.log("Your random number is: " + randomNum)
}

randomInRange()
