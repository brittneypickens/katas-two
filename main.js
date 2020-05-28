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
function power (x , n) {
    let total = 0
    for (let index = n; index < n ; index +=1) {
        total = power(x, total)
        
    }
    return total
}
    console.log('Power:' , power(5 , 7 ))