
let multiplication = function(){
    return x * y
 }
// let aa = multiplication(20,30)
// console.log(aa)

// function multiplication2(x){
//     console.log(x)

// }
// multiplication2(500)

function multiplication2(fn){

    //let fn = function(){
    //return x * y
    
    let bb = fn(20, 40)
    return bb 
}
let ab = multiplication2(multiplication)
console.log(ab)
