
let city ="Pune"
// 0  1  2  3
// P  u  n  e

console.log(city[1])

for(let i=0;i<city.length;i++){
    //console.log(i)
    console.log(city[i])
}


//
// stringt--object-->property and method

// length===>

let fullName = "chinmay"
let i = fullName.length
console.log(i)

//Methods

//Action and return type

// 0  1  2  3  4
// L  o  t  u  s

let flower = "Lotus"
let a = flower.toUpperCase()
console.log(a)
let ab = flower.toLowerCase()
console.log(ab)

let abc = flower.includes("L")
console.log(abc)

let abcd = flower.includes("l")
console.log(abcd)

let abcde = flower.indexOf("l")
console.log(abcde)

let abcdef = flower.indexOf("o")
console.log(abcdef)


let state = " Goa"
state.trimStart()
state = "Goa "
state.trimEnd()
state = " Goa "
state.trim()


// reverse the string

let nName = "amol"
let revStr = " "


// 0  1  2  3
// a  m  o  l
// l  o  m  a

for(let i=0;i<nName.length;i++){
    //console.log(nName[i])

    revStr = nName[i]+revStr
  
    //       a + " "=====>a
    //       m + a =======> ma
    //       o + ma =======>oma
    //       l + oma==========>loma

}

console.log(revStr)


let revStr2 = " "
for(let i=nName.length-1;i>=0;i--){
    //console.log(nName[i])
    revStr2 = revStr2+nName[i]

}
console.log(revStr2)


// very important part
// -----> slice()

// number + string =====> string
// string + string=======> string
// number + number==========>number
// string = number============> string

// remeber string is strongest and returns string when it is with array 

let aa = 10
 let bb = 20 
 let cc = "chinmay"
 
 console.log(cc+aa+bb) // Hint -- start from left side
 console.log(aa+bb+cc)
 console.log(bb+bb+cc)
//30 + "chinmay"


// slice ====> 


let lastName = "deshpande"

// 0     1     2    3   4   5   6   7     8
// d     e     s    h   p   a   n   d     e
// -9   -8    -7  -6   -5  -4  -3   -2    -1

console.log(lastName.slice(1,5))
console.log(lastName.slice(5))
console.log(lastName.slice(-5))
console.log(lastName.slice(1,-5))
console.log(lastName.slice(-7,-5))
console.log(lastName.slice(-5,-7))



person = "Anjali"

let qqq = person.startsWith("A")
console.log(qqq)

let qqqa = person.startsWith("An")
console.log(qqqa)


let qqqb = person.endsWith("li")
console.log(qqqa)

let qqqba = person.endsWith("i")
console.log(qqqa)


console.log(lastName2.charAt(0))
console.log(lastName2.charAt(5))


let info = "chinmay-deshpande-7709192441"
//chinmay deshpande 7709192441
// ["chinmay","deshpande","7709192441"]
let ggg = info.split("-")
console.log(ggg)

let f = "shubham"
let ddd = f.split("h")
console.log(ddd)

// split method removes particular character from string and returns array


//********Practice************** *//

let mm = " Engage"
let ggg2 = mm.split("g")
console.log(ggg2)

