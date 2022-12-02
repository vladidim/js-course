var romanToInt = function(s) {
    
    var num = 0
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] == "M") {
            if (s[i-1] == "C") {
                num = num + 900
            } else {
                num = num + 1000
            }
        }
        
        if (s[i] == "D") {
            if (s[i-1] == "C") {
                num = num + 400
            } else {
                num = num + 500
            }
            
        }
        
        if (s[i] == "C") {
            if (s[i+1] == "D" || s[i+1] == "M") {
                num = num
            } else if (s[i-1] == "X") {
                num = num + 90
            } else {
                num = num + 100
            }
            
        }
        
        if (s[i] == "L") {
            if (s[i-1] == "X") {
                num = num + 40
            } else {
                num = num + 50
            }
        }
        
         if (s[i] == "X") {
            if (s[i+1] == "L" || s[i+1] == "C") {
                num = num
            } else if (s[i-1] == "I") {
                num = num + 9
            } else {
                num = num + 10
            }
            
        }
        
        if (s[i] == "V") {
            if (s[i-1] == "I") {
                num = num + 4
            } else {
                num = num + 5
            }
        }
        
        if (s[i] == "I") {
            if (s[i+1] == "V" || s[i+1] == "X") {
                num = num
            } else {
                num = num + 1
            }
            
        }
        
    }
    return num
    console.log(num)
};

romanToInt("VII")
