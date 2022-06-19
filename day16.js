
let info = ["chinmay","deshpande",12,34]

//retrive(index)----index kadhne array madhun

console.log(info[0])
console.log(info[1])

//add

//info.push("marathi")
//info.unshift("Mr")

// delete
// info.pop()
//info.shift()
//info.splice(1,2)

// update

// info[0] = "amol"


let obj={
    firstName:"chinmay",
    lastName : "deshpande",
    rollNumber:12,
    age:34

}
//retrive

//dot notation and bracket notation
let fn = obj.firstName
let fn2 = obj['firstName']
console.log(fn)
console.log(fn2)

// update

//dot notatio nand bracket notation

obj.firstName ="tanmay"
console.log(obj)

obj['firstName']= "chaitanya"
console.log(obj)


// add 
// dot notation and bracket notation

console.log(obj.age)

obj.age = 45
console.log(obj.age)

obj.lang = "marathi"
obj['city'] ="pune"
console.log(obj)


// delete

// dot notation and bracket notation

delete obj['city']
delete obj.lang
console.log(obj)


//******************************************//

let vehicle ={

    type:"SUV",
    car : "audi"

}

// by dot notation and bracket notation
// retrive

console.log(vehicle.type)
console.log(vehicle['type'])

// update 

vehicle.car = "BMW"
vehicle['car'] = "Audi"

// add

vehicle.color ="Black"
vehicle['color'] = "Red"

// delete
delete vehicle.color
console.log(vehicle)
delete vehicle['color']




//              0  1  2  3  4
let numbers = [11,22,33,44,55]

for(let i=0;i<numbers.length;i++){
    console.log(i)
    console.log(numbers[i])
}
let animal ={
    namey:"Tiger",
    age:23,
    city:"dhaka"

}
console.log(animal['age'])//23---
console.log('------')
console.log(animal.age)//23---dot notation does not work inside loop so we use bracket notation in loop



for(let key in animal){
    console.log(key.animal[key])
}






// python -- core---------->data science
//selenium
//django
//web scraping
//devopsss






















































