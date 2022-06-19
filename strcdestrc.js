// Es6 ==>

// let names = ["shubham","pravin","tushar"]
// let [aa ,bb,cc ] = names
// let [dd ,,ee ] = names

// console.log(aa)
// console.log(bb)
// console.log(cc)

// console.log(dd)
// console.log(ee)


// // program2 

// let cities  = [["bhopal","banglore"],"mumbai","nagpur"] 

// let [[aaa1,bbb1],bbb,ccc] = cities

// //console.log(aaa)
// console.log(bbb)
// console.log(ccc)
// console.log(aaa1)
// console.log(bbb1)

let a = 1
let b = 2


console.log(a)
console.log(b)


// let temp ;

// temp = a
// a = b 
// b = temp

// let x = 1 ;
// let y = 2 ;
// [x,y]=[y,x];  // [2,1]

// console.log(x)
// console.log(y)


// object

let student = {

    firstName: "shubham",
    lastName: "kamble"
}

let { firstName: fn, lastName: ln } = student
// console.log(firstName)
// console.log(lastName)
console.log(fn)
console.log(ln)

// combination 
let candidates = [
    {
        fullName: "shubham",
        marks: 50
    }
    ,
    {
        fullName: "bapurao",
        marks: 22
    }
]
let [ {fullName:fn1,marks:mk1},{fullName:fn2,marks:mk2}] =candidates
console.log(fn1) 
console.log(mk2)

let obj = {
    skills:[2,3,4],
    skills2:[22,33,44]
}
let {skills:[a6,a7,a8],skills2:[a66,a77,a88]}  = obj
console.log(a6)
console.log(a77)


let info = {
    parents:{
        father:"anshu",
        mother:"kasabe"

    }
}

let { parents:{father:f1,mother:m1}} = info
console.log(f1)
console.log(m1)