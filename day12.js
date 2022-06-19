//---------practice-------------//

//Array - objetc
// object-- properties and methods
//methods----action and return type

// indexOf()
//action- search for the index of element
//return- index of element
// if element is not found it returns -1 

//                 0        1        2          3
let vegetables =["tomato","potato","brinjal","cucumber"]
let aaa = vegetables.indexOf("cucumber")
console.log(aaa)


// includes()
//action- search for the element
//returns boolean valuve i.e true if element is found and 
//returns false if element is not found

let bbb = vegetables.includes("potato")
console.log(bbb)

let ccc = vegetables.includes("tomatao")
console.log(ccc)


// sort
// action - sort the elements alphabetically
// returns- new sorted length of array

let ddd = vegetables.sort()
console.log(ddd)

//reverse()
// action - reverses the array
// return - reversed array

let eee = vegetables.reverse()
console.log(eee)


//flat()
//                  0         1            2
//                0  1  2   0   1  2    0  1  2
let numbersA = [[11,22,33],[44,55,66],[77,88,99]]

console.log(numbersA[0])
console.log(numbersA[1])
console.log(numbersA[2])
console.log(numbersA[0][1])
console.log(numbersA[2][2])
console.log(numbersA[1][2])

let fff = numbersA.flat()
console.log(fff)


//******************practice*************************

let vegetablesA =["tomato","potato","brinjal","cucumber","ladyfinger"]
let aaab = vegetablesA.indexOf("ladyfinger")
console.log(aaab)

let aaac = vegetablesA.push("onion")
console.log(vegetablesA)

let aaad = vegetablesA.unshift("grains")
console.log(aaad)
console.log(vegetablesA)