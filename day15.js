// map()
//action= works with every element of array 
//return= arraay

//         0   1  2  3  4
let age = [23,44,55,22,22]
let rrr = age.map(function(el,index,arr){
    return 2022-el
})
console.log(rrr)

//filter()

let birthYear =[1999,1978,1967,2011,2000]

let aaa = birthYear.filter(function(el,index,arr){
    return el>=2000
})
console.log(aaa)

//reduce()

let runScore = [11,22,33,44]
let jkl = runScore.reduce(function(acc,el,index,arr){
        return acc+el
},0)
console.log(jkl)

// forEach()

let names = ["chinmay","poorva","pranali"]
let uuu = names.forEach(function(el,index,arr){
    console.log(el + 'welcome')
})
console.log(uuu)

//find()

let hh = [33,44,55,777,889,55,22,33,44,,666,77,59]
let qqq = hh.filter(function(el,index,arr){
    return el>50
})
console.log(qqq)


let qqq2 = hh.find(function(el,index,arr){
    return el>50
})
console.log(qqq2)

//findIndex()

let qqq3 = hh.findIndex(function(el,index,arr){
    return el>50
})
console.log(qqq3)

// some()

let yyy = [11,22,33,44,55,66,77,10002]
let ooo = yyy.some(function(el,index,arr){
    return el>1000
})
console.log(ooo)

//map(),filter(),reduce(),forEach(),find(),findIndex()
//some(),every(),push(),pop(),shift(),unshift()
//flat(),sort(),reverse(),includes(),indexOf()

//*--------------------------------*//

// splice() 
//             0       1        2        3         4
let city1 = ["pune","mumbai","jaipur","nagpur","udaipur"]

// city1.splice(indexN,numberOfelementstobedeleted,repl,repl2)

//city1.splice(1,1)
//console.log(city1)

//city1.splice(1,1,"bhopal")
//console.log(city1)

// concat()

let a = [11,22,33]
let b = [33,44,55]

let kkk = b.concat(a)
console.log(kkk)


let kkk2 = a.concat(b)
console.log(kkk2)

// join()

let info2 = ["shubham","kamble",8237109496]
let ppp = info2.join('-')
console.log(ppp)

// fill()
//          0    1   2   3   4  5
let lll = [100,101,102,112,10,990]
let ray = lll.fill('shubham',1,5)
console.log(ray)

//*------------------------*//

// slice

//         0       1      2        3        4          5  
let num = [11    ,22     ,33     ,44      ,55       , 66     ]
//         -6       -5    -4      -3      -2          -1

let qqqa = num.slice(2)
console.log(qqqa)


let qqq22 = num.slice(4)
console.log(qqq22)


let qqq33 = num.slice(-2)
console.log(qqq33)


let qqq44 = num.slice(1,5)
console.log(qqq44)

let qqq55 = num.slice(1,-1)
console.log(qqq55)


let qqq66 = num.slice(-5,-1)
console.log(qqq66)

let qqq77 = num.slice(-1,-4)
console.log(qqq77)


//--------------------Practice-----------------------//

// find()
let marks4 = [11,22,33,44,55,66,77,88]

let qqq4 = marks4.find(function(el,index,arr){
    return el>40
})
console.log(qqq4)


// findIndex()

let sss = marks4.findIndex(function(el,index,arr){
    return el>40
})
console.log(sss)


// splice()
//            0       1        2        3        4
let city2 =["pune","mumbai","delhi","kolkata","Osmanabad"]

 //city2.splice(1,3)
// console.log(city2)

 //city2.splice(2,2)
//console.log(city2)

city2.splice(1,1,"Tuljapur")
console.log(city2)

// concat()

let aa1=[11,22,33]
let bb1=[44,55,66]

let ccc = a.concat(b)
console.log(ccc)

let ddd = b.concat(a)
console.log(ddd)

























































