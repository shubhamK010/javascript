let x = 10
console.log(x)

x = 200
console.log(x)

 // const h = 100
 // console.log(h)
 // h = 300 

 //              0       1        2
 let fruits = ["apple","mango","chiku"]
 console.log(fruits[0])


// object-- property and method

// Every thing is object

// array is object(property and methods)

// property--- length 

let aaa = fruits.length
console.log(aaa)


// program 2 

// method----------action and return type


fruits = ["apple","mango", "chiku"]
let arrA = fruits.push("papaya")
console.log(arrA)
console.log(fruits)

//['apple,'mango','chiku','papaya']


let arrB = fruits.unshift("grapes")
console.log(arrB)
console.log(fruits)

// pop()

let arrC = fruits.pop()
console.log(arrC)
console.log(fruits)


// shift
let arrD = fruits.shift()
console.log(arrD)
console.log(fruits)



/*********************** **/
// reverse()

//action - reverse the actual way
// return - array 

let vegetable = ["potato","tomato","cucumber","onion"]
let qwerty = vegetable.reverse()
console.log(qwerty)
console.log(vegetable) 
// so that we get [ 'onion','cucumber','tomato','potato']


// includes()//boolean type
// action - search for element
// return - return true and if not found returns false

let arrE = vegetable.includes("Potato")
console.log(arrE)



// indexOf()
// action - search for element
// return - if the element is found it will index,else it will return -1 for error


//['potato','tomato','cucumber','onion']-----we already reversed iy by reverse method
let arrF = vegetable.indexOf("potato")
console.log(arrF)


// slice()
// action -- breaks the array into smaller array 
// return - array 
// array is denoted by square bracket
// string is denoted by single quotation or double quotation


// slice()
//            0       1        2        3         4
let city = ["pune","delhi","kolkata","mumbai","jaipur"]
//            -5      -4    -3          -2       -1 

let arrCV = city.slice(1,4) // last valvue is not inclusive 
 console.log(city.slice(1,4))
               
console.log(city.slice(2,5))
console.log(city.slice(2))
console.log(city.slice(-4))
console.log(city.slice(-4,4))
console.log(city.slice(-5,1))
console.log(city.slice(-1,-5))
 

// mhanje number line war left kadun right kade janarich value hi true aste,ase ya slice method che ahe
// number line war right kadun left kade janarya values ya blank dakhavte i.e.[]


// next lecture madhe apan shikuya---map,reduce,filter,find,findindex,some,every,forEach
 
               
































