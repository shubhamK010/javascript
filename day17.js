
let info =["chinmay","deshpande",12,13]

let person ={
    firstName: "chinmay",
    lastName:"deshpande",
    rollNo:12,
    age:13
}

// retrive

console.log(person.firstName)
console.log(person ['firstName'])

// add 

person.language = "Hindi"
person['language'] = "hindi"

// update

person.age = 23
person['age'] = 34

// delete

delete person['age']
delete person.age

console.log(info)


//****************************************//

for(let key in person){
    console.log(key,person[key])
}


// String
// Object====>property and method

let x =[11,22,33,44]
console.log(typeof x)

let isMarried = true
console.log(typeof false)

let namey ="chinmay"
let lastName ='deshpande'

console.log(typeof namey)
console.log(typeof lastName)


let city ="pune"

// 0  1  2  3
// p  u  n  e


console.log(city[0])
console.log(city[3])

//              0        1       2
let names = ["chinmay","lahu","krishna"]

for(let i=0;i<names.length;i++){
    // console.log(i)
     console.log(names[i])
}


// 0  1  2  3 
// N  a  a  z

let firstName2 = "Naaz"
for(let i=0;i<firstName2.length;i++){
   // console.log(i)
   console.log(firstName2[i])
}



// String =====> object====>property and method

//method - action and return type

let state = "Rajasthan"

let rrr = state.toUpperCase()
console.log(rrr)

let yyy = state.toLowerCase()
console.log(yyy)

let jkl = state.includes('j')
console.log(jkl)

let jkl2 = state.includes('r')
console.log(jkl2)


// Method chaining:-


// 0  1  2  3  4  5
// N  a  g  p  u  r

//index= 5
//length = 6

let city2 = "Nagpur"
city2.toUpperCase().toLowerCase().length


let qqq = city2.indexOf('N')
console.log(qqq)

let ttt = city2.indexOf('R')
console.log(ttt)

// toUpperCase()//toLowerCase()//indexOf()//includes()
//length


let nm =" ninad"
console.log(nm.length)
let kkk = nm.trimStart()
console.log(kkk.length)




let nmn ="ninad "
console.log(nmn.length)
let iii = nmn.trimEnd()
console.log(iii)
console.log(iii.length)



let nmnmn = " ram "
console.log(nmnmn.length)
let ooo = nmnmn.trim()
console.log(ooo.length)


// function addition(x,y){
//    return x+y
//    return true
//    return ["chinmay","poorva","seema"]
//    return [22,33,44,55]
//    return{
    //fullName:- "chinmay"
//}
// let r = addition(12,13)


//*******************************************//

// "NAGPUR"=====> "nagpur"=====>6


 //let mapA=[11,22,33]

 //let sa =mapA.map(function(el){
   // return el +2  // [13,24,35]
   // reduce(functio(acc,el){
   // return acc+el
   //},0)
   //console.log(sa)  