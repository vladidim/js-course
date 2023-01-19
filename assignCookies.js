
let g = [10,9,8,7]
let s = [5,6,7,8]

var findContentChildren = function(g, s) {
    let contentChildren = 0
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++)
        if (g[i] <= s[j]) {
            contentChildren += 1
            delete s[j]
            break;
        }
    }
    
    console.log(contentChildren)
    return contentChildren
};

findContentChildren(g, s)