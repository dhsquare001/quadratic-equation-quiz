//in JavaScript

function quadratic(a, b, c){
    let x = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    let y = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    return[x,y];
}
console.log ('the root of the equation are' + quadratic(3, 6, -9));