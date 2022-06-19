//Methods of Array===>

//push===>add element at last====> gives new length
let names = ["shubham","ravi","pravin"]
let aa = names.push("tushar")
console.log(aa)
console.log(names)

// unshift() = add element at beginning====>gives new length
let bb = names.unshift("raju")
console.log(bb)
console.log(names)

//pop()====> removes element from last====> returns same element

let cc = names.pop()
console.log(cc)
console.log(names)

//shift()===> removes element from beginning====> returns same element

let ee = names.shift()
console.log(ee)
console.log(names)


//reverse()===> reverses elements in array

let ff = names.reverse()
console.log(ff)


// sort()=====> arrange elements alphabetically

let gg = names.sort()
console.log(gg)

// includes()====> search for the element

let fruits = ["apple","mango","banana","chiku"]
let fff = fruits.includes("mango")
console.log(fff)

let gg1 = fruits.includes("Mango")
console.log(gg1)

// indexOf()====>Gives index number

let hh = fruits.indexOf("banana")
console.log(hh)

let ii = fruits.indexOf("Banana")
console.log(ii)

//slice()
//               0        1      2       3         4
let animals = ["tiger","lion","sheep","rabbit","tortoise"]
//                -5       -4    -3       -2        -1 

console.log(animals.slice(1,3))
console.log(animals.slice(1,4))
console.log(animals.slice(0,4))
console.log(animals.slice(0))
console.log(animals.slice(2))
console.log(animals.slice(-4,-1))
console.log(animals.slice(1,3))
console.log(animals.slice(-1,-4))


// flat()
//                0       1       2
let numbers = [[1,2,3],[3,4,5],[6,7,8]]
console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[0][1])

let jj = numbers.flat()
console.log(jj)



// map()======> map method works with every element

// map()===> oldd way

//          0  1  2  3  4 5
let age = [11,22,33,44,55,66]
let birthYear2 =[]

for(let i=0;i<age.length;i++){
    let br2 = 2022- age[i]
    birthYear2.push(br2)
}
console.log(birthYear2)

// map=====> new way

let rrr=age.map(function(el,index,arr){
    return 2022-el

})
console.log(rrr)

// filter=======> to filter out some values

//old way

let hh2 = [33,44,55,,66,77,35,51,46]
let above50 =[]

for(let i=0;i<hh2.length;i++){

    if(hh2[i]>50){
        above50.push(hh2[i])
    }
}
console.log(above50)

//filter=======>new way

let hh3 = hh2.filter(function(el,index,arr){
    return el>50
})
console.log(hh3)

// find()===>gives first value according to condition and returns single value

let kk3 = hh2.find(function(el,index,arr){
    return el>50
})



// findIndex()

let ll3 = hh2.findIndex(function(el,index,arr){
    return el>50
})
console.log(ll3)



//reduce===> works on every elment of array gives out particular value

let marks = [11,22,33,44,55,66,77]
let sum = 0

for(let i=0;i<marks.length;i++){
    sum = sum+marks[i]
}
console.log(sum)



// reduce=====> new way

let ggg2 = marks.reduce(function(acc,el,index,arr){
    return acc+el

},0)
console.log(ggg2)

//forEach method====> works on every element but returns nothing
//               ====> just performs operations and don't return anything

let names3 = ["shubham","raju","shailesh","pravin"]
let jjj2=names3.forEach(function(el,index,arr){
    console.log('welcome'+el)
})

console.log(jjj2)


// includes()

let ww=names3.includes("Shubham")
console.log(ww)


// every ()

let yyy = [11,22,33,44,55,66,77,88,99]

let iii2=yyy.every(function(el,index,arr){
    return el>10
})
console.log(iii2)


let iii3 = yyy.every(function(el,index,arr){
    return el>20
})
console.log(iii3)


// some()

 yyy = [11,22,33,44,55,66,77,88,99]

let qqq = yyy.some(function(el,index,arr){
    return el>50

})
console.log(qqq)


// concat()=====> to join and make single array

let a=[11,22,33]
let b=[44,55,66]

let vv= a.concat(b)
console.log(vv)

let vv2 =b.concat(a)
console.log(vv2)


// join()======> returns string

let info = ["shubham","kamble","8237109496"]
let ppp = info.join('-')
console.log(ppp)


// fill()
//          0    1    2   3   4   5
let ttt = [100,2000,300,400,500,600]
let ray = ttt.fill('@',1,5)
console.log(ray)

let ray2 = ttt.fill('shubham',1,5)
console.log(ray)


//splice()====> delete in between element
//              0      1         2        3        4         5
let city1 = ["pune","mumbai","nagpur","nashik","kolhapur","satara"]
//city1.splice(indexN,numberofelementstobedelted,repl1,repl2)


//city1.splice(1,5)
//console.log(city1)

city1.splice(1,1,"solapur")
console.log(city1)

// object 

let student = {
    fullName: "ram",
    age: 18,
    skills: ["reading", "drawing"],
    city: "jaipur"
}

// retrive
console.log(student.fullName)
console.log(student['fullName'])
// update 
student.age = 18
student['age'] = 30
// add 
student.lang = "Sanskrit"
student['language'] = "Sanskrit"
// add skill to array 
student.skills.push('cooking')
student['skills'].push('cooking')
// delete property
delete student.lang
delete student['city']


candidate = {
    fullName: "shubham",
    age: 12,
    skills: ["science", "history"],
    city: "pune"
}

// runninnig loop on object======>
for (let key in candidate) {
    console.log(key, candidate[key])

}



//Date = 13-05-2022 Practice

let x= 10
console.log(x)

const y =10
console.log(y)

// y=20

let numOne= 10
let numTwo = 20

console.log(numOne)
console.log(numTwo)
console.log(numOne+numTwo)


function add(a,b){
    console.log(a+b)
     return a+b

}
let ab=add(20,5)
console.log(ab)
console.log(ab-2)
console.log(ab*2)
console.log(ab/2)
console.log(ab%2)


// function declaration

function addition(o,p){
    console.log(p+o)
}
addition(40,20)

// function expression

let addition2=function (o,p){
    console.log(p+o)
}
addition2(40,20)



// arrow function
let addition3= (o,p)=>{
    console.log(p+o)
}
addition3(40,20)


// function without paramters and without return type

function sum2(){
    console.log(10+9)
}
sum2()
sum2()


// function with paramters and without return type


function sum3(q,w){
    console.log(q+w)

    
}
sum3(1,2)

// function with paramters and with return type

function sum4(qq,ww){
    return qq-ww


}
let rr=sum4(50,40)
console.log(rr+rr)
console.log(rr/2)
console.log(rr%2)
console.log(rr*2)


// function without paramters and without return type

let www=function (){
    console.log(10+9)
}
www()
www()


// function with paramters and without return type


let ppp3=function (q,w){
    console.log(q+w)

    
}
ppp3(12,13)

// function with paramters and with return type

let ss=function (qq,ww){
    return qq-ww


}
let rr4=ss(50,40)
console.log(rr4)
console.log(rr4+4)



// function without paramters and without return type

let www2= ()=>{
    console.log(10+9)
}
www2()
www2()


// function with paramters and without return type


let ppp4= (q,w)=>{
    console.log(q+w)

    
}
ppp4(12,13)

// function with paramters and with return type

let ss2= (qq,ww)=>{
    return qq-ww


}
let rr5=ss(50,40)
console.log(rr5)
console.log(rr5+4)


// string






























