let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
// a = 2
// b = 2
// c = 2
// d = 1


let y = 2;

let x = 1 + (y *= 2);

y = 4 //(multiplied by 2)
x = 5 //(calculated as 1 + 4)

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7) 

//Fix the addition
let n = +prompt("First number?", 1);
let m = +prompt("Second number?", 2);

alert(n + m); // 3