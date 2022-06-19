// String,Array,Object,Functions

// functions====>

// function declaration

//function expression

//arrow function

function add(){
    console.log(8+2)

}

add()
add()


function add2(x,y){
    console.log(x+y)
}
add2(15,20)
add2(20,40)

function add3(x,y){
    return x+y
}

let bb = add3(10,22)
console.log(bb)
console.log(bb+bb)


// function declaration

function addition(x,y){
    return x+y
}

let kkk = addition(12,13)
console.log(kkk)

let addition2= function(x,y){
    return x+y
}

let kkka = addition(12,13)
console.log(kkka)

let addition3 =(x,y)=>{
    return x+y
}
let bbss = addition3(12,13)
console.log(bbss)

// function

// string as a parameter to function

let names =["chennai","lucknow","indore"]

let sa = names
sa.push("hyderabad")

console.log(names)
console.log(sa)

let student ={
    firstName:"vaibhav",
    age:20
}
   student.age = 25
   console.log(student)
   let student2 = student
   console.log(student2)

//*-------------------------*//

//string as a parameter to function
function praise(word){
    console.log('good'+  word)
}
praise("raju")

// array as parameter to function

let sum2 =[11,22,33,44,55]

function total(arr){

     //let arr = sum2
    console.log(arr)//[11,22,33,44,55]
    arr[0]= 500
    console.log(arr)//[500,22,33,44,55]

}

console.log(sum2)//[11,22,33,44,55]
total(sum2)
console.log(sum2)//[500,22,33,44,55]


// array as a parameter to another function

let pi = [10,20,30]

function sumAll(a){
    let cat = a.reduce(function(acc,el){
        return acc+el
    },0)
       return cat
}

let ddd = sumAll(pi)
console.log(ddd)

// object as parameter to function

let candidate = {

    fullName:"krishna",
    age:33
}


let man = candidate
function info(man){

    //let man = candidate
    man.fullName = "vikrant"
    console.log(man)
    return man
}

console.log(candidate)
let abab = info(candidate)
console.log(abab)
console.log(candidate)



//-------------------Practice-------------------//



let city = ["pune","mumbai","kolkata"]

let aa2 =city.push("delhi")
console.log(aa2)
console.log(city)


let bb32=city.unshift("latur")
console.log(bb32)
console.log(city)


let kk2 = city.pop()
console.log(kk2)
console.log(city)

let mm2 = city.shift()
console.log(mm2)
console.log(city)


let oo = city.indexOf("mumbai")
console.log(oo)


let pp = city.indexOf("satara")
console.log(pp)


let yy = city.sort()
console.log(yy)
console.log(city)


let uuu=[11,22,12,23,44,56]
let as = uuu.sort()
console.log(as)

let ccc = city.reverse()
console.log(ccc)
console.log(city)

//slice
//               0       1        2        3
let animals = ["tiger","lion","elephant","deer"]
//            -4       -3         -2       -1
console.log(animals.slice(1,3))
console.log(animals.slice(1))
console.log(animals.slice(-1,1))
console.log(animals.slice(-4,-2))


// flat

let numbers = [[1,2,3],[4,5,6],[7,8,9]]

console.log(numbers[0])

let rrra = numbers.flat()
console.log(rrra)

// splice
           
let yytt = [11,22,33,44,55]

let ggg = yytt.splice(1,2,34,35)
console.log(ggg)
console.log(yytt)


// map

//old way


let birthYear = [1998,1997,1990,1999,2000]

let ageN=[]

for(let i=0;i<birthYear.length;i++){
    let age = (2022-birthYear[i])
    ageN.push(age)
}
console.log(ageN)

// map ---new way

let rrr2 = birthYear.map(function(el,index,arr){
    return 2022-el
})
console.log(rrr2)

// filetr (old way)


let h = [33,44,55,22,11,66]

let above30=[]

for(let i=0;i<h.length;i++){
    if(h[i]>30)
    above30.push(h[i])
}
console.log(above30)


// filter(new way)


let hhh = h.filter(function(el,index,arr){
    return el>30
})
console.log(hhh)

// reduce(old way)

let marks =[11,22,33,44,55]
let sum =0

for(let i=0;i<marks.length;i++){
    sum = sum + marks[i]
}
console.log(sum)

// reduce(new way)

let eee = marks.reduce(function(acc,el,index,arr){
      return acc+el
},0)
console.log(eee)
let bbbb=['ankita','nikita','sai']
let rr=bbbb.forEach(function(el,index,array){
return  ('welcome'+el)
})
console.log(rr)//undefined

//some==>boolean value
let num=[12,34,56,78,11,33,66]
let ru=num.some(function(el,index,array){
return el>30     
})
console.log(ru)

//every==>boolean 
let ww=num.every(function(el,array,index){
    return el>50
})
console.log(ww)

//find()
// let city2=[11,22,33,44,55,66,77]
// let ry=city2.find()
// console.log(ry)


//----------------------------//
let city5="Ahmednagar"
let city6=[]
for(let i=0;i<city5.length;i++){
    console.log(city5[i])
    let cc=console.log(city5[i])
    city6.push(city5[i])
   
}
console.log(city5)
console.log(city6)