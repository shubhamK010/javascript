
// let clothes={
//     color:"yellow",
//     name:"Raymonds",
//     type:"cotton"
// }

//setting the value outside the class

class clothes{
    color=undefined
    name=undefined
    type=undefined


}
let linen=new clothes()
let casualWear=new clothes()
console.log( typeof linen)
console.log(typeof casualWear)


//linen---->

linen.color="white"
linen.name="officeWear"
linen.type="plain"
console.log(linen)

    
//setting the value at the time of object creation i.e.by using constructor

class clothes2{
    constructor(clr,name,type){
        this.color=clr
        this.name=name
        this.type=type
    }

}
let weddingWear=new clothes2("red","weddingWear","designer")
console.log(weddingWear)

//using set function

class clothes3{
    setColor(clr){
        this.color=clr
    }
    setName(name){
        this.name=name
    }
    setType(type){
        this.type=type
    }
}
let sportWear=new clothes3()
console.log(sportWear)
sportWear.setColor("blue")
sportWear.setName("reebok")
sportWear.setType("gymOutfit")
console.log(sportWear)

// hamare pass ek aur datatype ha,use"set" bolte hai
//"set" does not store duplicate values
//"set does not store values by index"



let setA=new Set([11,22,33,44,55,66,44,77,88,99])
console.log(setA) // jab hum ye print karenge tab duplicate values eliminate ho gayi hogi
console.log(setA[0]) // set does not stores the value by index


// set pe "size' naam ki property hai
//"size" naam ki property no.elements deti hai set me se....duplicate elements set me se eliminate honge aur hume 9 size milega

let aa=setA.size
console.log(aa)

setA.add(22)
console.log(setA) // it will not add same or already existing element

setA.add(12)
console.log(setA)

setA.delete(66)
console.log(setA)

let bb=setA.has(55)
console.log(bb)  //has property return the boolean value..if element is present it returns the true and if it is absent it returns false

setA.clear()
console.log(setA) //it clears the complete set and give blank set

let setB=new Set([54,88,69,43,61,75,39,56])
console.log(setB)  // it says number is not iterable in set,so that we used array inside the set

for(let item of setB){
    console.log(item)
}

//How to remove duplicate values in set?===>we can use set
//But by logic we can do that above method

let marks=[15,78,96,43,56,34,29,15,96]

let setC=new Set(marks)
console.log(Array.from(setC)) // kisi bhi iterable object ko wapas se array form me convert karne ke liye "Array.from" method hai
//                            // array me convert hone se hum uspe array ki properties laga sakte

//e.g. for Array.from

//document.querySelectorAll('li')   // a=[li,li,li]  ==>ye karne se hume node list milti hai....array nahi milta to hum ispe array.from method use karke array me convert kar sakte hai
//Array.from(a)   // now we get array from node list                        


//---------------------------------------------------------------------//
// let info={
//     firstName:"shubham",
//     lastName:"kamble",
//     [11,44,66]:55
// }

//normal object me key sirf string ho sakti hai
// par hamare pass ek datatype hai usme koi bhi type ki key ho sakti hai
//us datatype ko "map" bolte hai


//Map
let mapA=new Map()
// hum aise bhi datatype create kar sakte hai
let ar=new Array()// let ar=[1,2,3,4]
let st=new String()// let st="a"
let ob=new Object()//let ob={}


//mapA==>object====>property adn methods
// property==>size
// jaise array and string me length naam ki property hai wasie hi yaha "map" me size naam ki property hai

console.log(mapA.size)


// map me "set" naam ki method hai usse key and value set kar sakte hai

//mapA.set(key,value)
mapA.set([11,22,33,44,55],"marks")
console.log(mapA)

mapA.set(true,"isFit")
console.log(mapA.get(true))  // here we get value of "true" = "isFit"
//                           //jaise object me retrive naam ki method hai waise hi "set" me "get" naam ki method hai

let cc=mapA.has(true)
console.log(cc)        // has===>agar value present hai tyo true return karega nahi to false return karega

// mapA.clear()// clear===> clears the mapA but does not clear the datattype
// console.log(mapA)

console.log(mapA)
//output=Map(2) { [ 11, 22, 33, 44, 55 ] => 'marks', true => 'isFit' }
//   [ 11, 22, 33, 44, 55 ]=key , 'marks'=value
//    true =key,  'isFit'= value

mapA.delete(true)
console.log(mapA) // isse true naam ki key aur uski value delete ho jayegi

//isko iterate karne keliye 3 methods hai
// ==> 1)method 1=find keys 2)find values 3)find both key-values

let mapB=new Map([
    [10,"rollNo"],
    ["color","white"],
    [true,"isStudent"],
    [{a:"s",b:"k"},44]
])                        // hum map ke andar key value me koi bhi datatype le sakte hai
console.log(mapB.size) // jitne map ke anar key-values hai utne mil jayenge


for(let a of mapB.keys()){
    console.log(a)
}

for(let a of mapB.values()){
    console.log(a)
}

for(let [key,val] of mapB.entries()){
    console.log(key,val)
}





//***********Basic javascript Ends Here,Now Advance javascript starts************** */
//advance javascript topic first= oops