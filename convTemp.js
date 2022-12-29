var convertTemperature = function(celsius) {
    let output = [];
    let kel = celsius + 273.15;
    let fahr = (celsius * 1.80 + 32.00);
    output.push(kel);
    output.push(fahr);
    return output;
};


// comment :)