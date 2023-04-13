// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["Black", "White", "Grey", "Red", "Green", "Blue", "Yellow", "Orange", "Brown", "Olive", "Purple", "Turquoise", "Violet", "Maroon"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Ivan",
        lastName: "Tsvetanov"
    },
    {
        firstName: "Konstantin",
        lastName: "Valeriev"
    },
    {
        firstName: "Damian",
        lastName: "Yordanov"
    },
    {
        firstName: "Boril",
        lastName: "Stoyanov"
    },
    {
        firstName: "Asparuh",
        lastName: "Popov"
    },
    {
        firstName: "Genadi",
        lastName: "Vasilev"
    },
    {
        firstName: "Mihail",
        lastName: "Prodanov"
    },
    {
        firstName: "Avram",
        lastName: "Mitev"
    },
    {
        firstName: "Byulent",
        lastName: "Mehmedov"
    },
    {
        firstName: "Erdinch",
        lastName: "Dervishev"
    }
]

// Function for random number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a random number between 1-100
document.getElementById("b1").addEventListener("click", btn1Click);
function btn1Click() {
    document.getElementById("p1").innerHTML = randomNum(1, 100);
}

// Returns a random number between "Start" and "End"
document.getElementById("b2").addEventListener("click", startEndRandom)

function startEndRandom() {
    var start = Number(document.getElementById("p2i1").value);
    var end = Number(document.getElementById("p2i2").value);
    var message

    console.log(start)

    if (start == start / 1 && end == end / 1) {
        if (start < end) {
            message = randomNum(start, end);
        } else {
            message = "Start Number should be smaller than End Number!";
        }
    } else {
        message = "Please enter numbers in both inputs?";
    }

    document.getElementById("p2").innerHTML = message;
}

// Returns a long Lorem Ipsum String
document.getElementById("b3").addEventListener("click", p3Text);

function p3Text() {
    document.getElementById("p3").innerHTML = lorem;
}

// Returns a Lorem Ipsum String based on the number or sentences specified
document.getElementById("b4").addEventListener("click", returnString);

function returnString() {
    var numSent = Number(document.getElementById("p4i").value);
    var textOutput;
    if (numSent == numSent / 1 && numSent != 0) {
        var count = 0;
        var index;
        for(let i = 0; i < lorem.length; i++) {
            if (lorem[i] == ".") {
                count += 1;
            }
            if (count == numSent) {
                index = i+1;
                break;
            }
        }
        console.log(index)
        textOutput = lorem.slice(0, index);
    } else {
        textOutput = "Please enter a positive number";
        }

    document.getElementById("p4").innerHTML = textOutput;
    console.log(numSent)
    console.log(index)
}

// Returns a Lorem Ipsum String based on the number or characters specified
document.getElementById("b5").addEventListener("click", stringOnRandomChar);

function stringOnRandomChar() {
    // var numChars = randomNum(0, lorem.length);
    var numChars = Number(document.getElementById("p5i").value);
    document.getElementById("p5").innerHTML = lorem.slice(0, numChars);
}

// Returns the current date(formatted)
document.getElementById("b6").addEventListener("click", currentDate);

var currentDate = new Date();

function currentDate() {
    document.getElementById("p6").innerHTML = (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
}

// Returns the current time(formatted)
document.getElementById("b7").addEventListener("click", currentTime);

function currentTime() {
    document.getElementById("p7").innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}


// Converts Inches to Feet (To convert inches to feet, you must multiply the unit by 0.083. So, for example, if you want to convert 15 inches to feet, you need to multiply 15 with 0.083.)
document.getElementById("b8").addEventListener("click", inchToFeet);

function inchToFeet() {
    var inch = Number(document.getElementById("p8i").value);
    var toFeet = inch / 12;
    document.getElementById("p8").innerHTML = toFeet.toFixed(2) + " ft";
    console.log(toFeet);
}


// Converts Feet to Inches (When you're converting inches to feet, you divide by 12 in/ft.)
document.getElementById("b9").addEventListener("click", feetToInches);

function feetToInches() {
    var f = Number(document.getElementById("p9i").value);
    var toInches = f * 12;
    document.getElementById("p9").innerHTML = toInches.toFixed(2) +" inches";
    console.log(toInches);
}


// Compares if two words are the same length
document.getElementById("b10").addEventListener("click", stringCompare);

function stringCompare() {
    firstWord = document.getElementById("p10i1").value;
    secondWord = document.getElementById("p10i2").value;

    if (firstWord.length == secondWord.length) {
        document.getElementById("p10").innerHTML = "The words are the same length";
    } else {
        document.getElementById("p10").innerHTML = "The words are not the same length";
    }
}


// Returns a random password
document.getElementById("b11").addEventListener("click", randomPass)

function randomPass() {
    document.getElementById("p11").innerHTML = randomNum(1000000000, 9999999999);
}


// Tells you if the number is even or odd
document.getElementById("b12").addEventListener("click", isEven);

function isEven() {
    var numP12 = Number(document.getElementById("p12i").value);
    
    if (numP12 % 2 == 0) {
        document.getElementById("p12").innerHTML = "The number is even";
    } else if(numP12 % 2 == 1) {
        document.getElementById("p12").innerHTML = "The number is odd";
    } else {
        document.getElementById("p12").innerHTML = "Please enter a number";
    }
}

// Returns a random color
document.getElementById("b13").addEventListener("click", randomColor);

function randomColor() {
    var colorNum = randomNum(0, (colors.length - 1));
    document.getElementById("p13").innerHTML = colors[colorNum];
}


// Returns a random first and last name
document.getElementById("b14").addEventListener("click", randomName);

function randomName() {
    firstNameNum = randomNum(0, (names.length - 1));
    lastNameNum = randomNum(0, (names.length - 1));

    document.getElementById("p14").innerHTML = names[firstNameNum].firstName + " " + names[lastNameNum].lastName;
}