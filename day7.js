
//              0         1          2
let names = ["chinmay","poorva", "sarika"]
console.log(names[0])

// method

//push()

let bbb = names.push("amol")
console.log(bbb)
console.log(names)

// unshift()
let ccc = names.unshift("shubham")
console.log(ccc)
console.log(names)


// pop()

let ddd = names.pop()
console.log(ddd)
console.log(names)

// shift()

let eee = names.shift()
console.log(eee)
console.log(names)

// includes()

let fruits = ["apple","mango","banana","watermelon"]
let fff = fruits.includes("banana")
console.log(fff)


// indexOf()

let ggg = fruits.indexOf("mango")
console.log(ggg)

let hhh = fruits.indexOf("watermelon")
console.log(hhh)


// reverse()
let fruit=["apple","mango","banana","watermelon"]
let iii = fruit.reverse()
console.log(iii)

// sort()

let jjj = fruit.sort()
console.log(jjj)

// slice()
//            0       1          2       3
let animals=["lion","tiger","elephant","deer"]
//               -4     -3        -2       -1                           
console.log (animals.slice(1,3))
console.log(animals.slice(0,4))
console.log(animals.slice(-5,-4))
console.log(animals.slice(2))
console.log(animals.slice(-3,-2))
console.log(animals.slice(0))
console.log(animals.slice(-5,-3))
console.log(animals.slice(0,1))


// flat()
//               0      1         2
let numbers = [[1,2,3],[3,4,5],[55,66,77]]
//              0 1 2   0 1 2    0  1  2

console.log(numbers[0])
console.log(numbers[0][0])

let rrra = numbers.flat()
console.log(rrra)


// map

// old way

let birthYear = [1999,2001,1989,1988]
let ageN = []// 23,21//[23,21]
// output = [23,21,33,34]
//  initialization condition check increment decrement
for(let i = 0;i<birthYear.length;i++){
    // console.log(2022-birthYear[i])
    let age = (2022-birthYear[i])
    ageN.push(age)
}
console.log(ageN)

// filter
let arrays= [11,22,33,44,55]
let above50=[]
for(let i = 0;i<arrays.length;i++){
//11
    if(arrays[i]>20){
        //console.log(arrays[i])
        above50.push(arrays[i])
    }
}
console.log(above50)


let marks = [11,22,33]//0+11=11
let sum = 0            //11+22=33
            //33+33=66
for(let i = 0;i<marks.length;i++){
    console.log(marks[i])
    sum = sum + marks[i]
}        //0

 console.log(sum)
//map=work with every element return array
 let year=[2000,1999,1777,1998]
 let rr=year.map(function(el,array,index){
     return 2022-el
 })
 console.log(rr)








 
 //******************************Practice*******************************************
 //filter
 let city=[11,33,44,88,66,90,66]
 let uu=city.filter(function(el,array,index){
     return el>40
 })
console.log(uu)

//reduce=returns single value
let num=[2,4,6,7]
let yyy=num.reduce(function(acc,el,index,array){
    return acc+el
},0)
console.log(yyy)
//forEach= kuch return nahi karti sirf print karti hai
let nmess=["ankita","nikita","tushar","pravin"]
nmess.forEach(function(el,arr,index){
    console.log('welcome'+el)

})





