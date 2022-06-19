//function as a parameter to another function
// hum function se function pss kara rahe hain


//  function add(x,y){

//     console.log(x+y)
//  }
//  add(10,20)


let x= 20
console.log(x)

let addition = function(x,y){
    console.log(x+y)
}
addition(20,30)  // this is calling the function
console.log(addition) // this is the printing the functiion definition for arrow function


//saare data type alag alag karke parameters pass karke dekhe the

//  let multiplication = function(){
//      return x * y  
// }
// // // let aa = multiplication(20,30)
// // // console.log(aa)

// // // function multiplication2(x){
// // //     console.log(x)

// // // }
// // // multiplication2(500)


// function multiplication2(fn){

//     //let fn = function(){
//     //return x * y
    
//     let bb = fn(20, 40)
//     return bb 
// }
// let ab = multiplication2(multiplication)
// console.log(ab)


// we will retrurn various data values by function
// function se various values return karke dekhte hain

function returnA(){

    return 55
}

let ss = returnA()
console.log(ss)

// abhi function se string return karate hai
function returnB(){

    return "shubham kamble"

}
// abhi function se number return karate hai
let ss2 = returnB()
console.log(ss2[0])

// abhi function se array retyrn karate hai
function returnC(){
    return [10,20,30,40,50]
}
let z=returnC()
console.log(z[z.length-1]) // isse humein last value of array milegi i.e. 50

// abhi functionm se object return karate hai
function returnD(obj){
    return{
        firstName:"shubham",
        lastName:"kamble"

    }
}

let sss= returnD()

for(let key in sss)
console.log(key,sss[key])



//abhi function se function return karate hai


function addition3(){
    let x = function(){
        console.log('hello')
    }
    return x
}
let gg = addition3()
gg()



























