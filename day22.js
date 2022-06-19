
let name2 = "Shubham"
let lastName = 'Kamble'
let middleName= 'Pandurang'

console.log(name2,middleName,lastName)

//string---

//Everything in javascript is object
//String is also object---so it have property and methods

//Array stores the value by index===> true
//Object also stires the value by index===>false
//(Object stores the value in format key:value)
//String stores the charatcer by index

let city = "Pune"
// 0  1  2  3
// P  u  n  e
console.log(city[0])
console.log(city[2])
console.log(city[3])

//string

// object--property and method
// method--action and return type

//string is object

let city2 = "Osmanabad"

// 0  1  2  3  4  5 6  7  8 
// O  s  m  a  n  a  b  a  d
//string stores the value by index

console.log(city2[3])
console.log(city2[5])
console.log(city2[7])
console.log(city2[8])

//  function add (x,y){
//     console.log(x+y)
//     return"hello"
// }

// let a = add(34,70)
// console.log(a) // "hello"
// console.log(a+a)// "hellohello"

let cities = ["Banaras","Tuljapur"]
let rr =cities.push('pune')
console.log(rr)
console.log(cities)

let animal = "Tiger"
console.log(typeof animal)
let bb = animal.toUpperCase()
console.log(bb)

let cc = animal.toLowerCase()
console.log(cc)

let firstName = "shubham"

let nn = firstName.toUpperCase().toLowerCase.length // correct
console.log(typeof nn)

//let yy = firstName.toLowerCase().toUpperCase().length.toUpperCase() // wrong(because we cannot apply string method on number)
//console.log(yy)

let lastName2 = "Kamble"
let ss = lastName2.startsWith("Ka")
console.log(ss)

let ss2 = lastName2.endsWith("le")
console.log(ss2)

let language = "Anthropology"

let ss3 = language.includes("opo")
console.log(ss3)


let ss4  = " Vrindavan"
console.log(ss4.length)
let ss5 = ss4.trimStart()
console.log(ss5)

let ss6  = "Vrindavan "
console.log(ss6.length)
let sws = ss6.trimEnd()
console.log(sws)


let ss7 = " Vrindavan "
console.log(ss7.length)
let sws2 = ss7.trim()
console.log(ss7)

//indexOf=====> gives the first occurence of particular method
let activity = "Construction"
let mm = activity.indexOf('t')
console.log(mm)

let mm2 = activity.indexOf('n')
console.log(mm2)


//slice

//0    1  2  3   4  5   6  7  8  9  10
//m    a  h  a   r  a   s  h  t  r  a
//-11-10 -9 -8  -7  -6 -5 -4 -3 -2 -1

let abc = "maharashtra"

let rss1 = abc.slice(2)
console.log(rss1)
let rss2 = abc.slice(10)
console.log(rss2)
let rss3 = abc.slice(2,6)
console.log(rss3)
let rss4 = abc.slice(-5,-2)
console.log(rss4)
let rss5 = abc.slice(-10,-2)
console.log(rss5)
let rss6 = abc.slice(-11)
console.log(rss6)
let rss7 = abc.slice(5)
console.log(rss7)
let rss8 = abc.slice(-1,-11)
console.log(rss8)