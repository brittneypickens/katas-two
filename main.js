// Add
function add(x, y) {
    return x + y
}
console.log('Add:' , add(20, 45))

// multiply

function multiply(x , y) {
    let total = 0
    for (let i=0; i < y; i+=1)  {
        total = add(x, total)
    }
    return total 
}
console.log('Multiply:' , multiply(20 , 45))

// power
function power (x , y) {}
    

console.log('Power:' , power(  ))