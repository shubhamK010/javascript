//object = properties and methods

// object literal---> directly object likhne ko object literal bolte hai

let student={
    firstName:"shubham",
    lastName:"kamble",
    age:20,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}

// update by-->dot notation and bracket notation
//by dot notation
console.log(student.firstName)
student.age=25
student.city="pune"
delete student.city

// by bracket notation

console.log(student['firstName'])
student['age']=25
student['city']="pune"
delete student['city']


//jab bhi koi function object se attach rehta hai to use method bolte hai

student.calBirthYear()


//we can make multiple object literals

let student2={
    firstName:"pravin",
    lastName:"shelar",
    age:22,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}

student2.calBirthYear()


// jo humne direct object banaya===>use object literal bolte hai
//Different ways to create object
//1) object literal
//2)Function constructor
//3)Es6 class
//4)Object.create()

// function constructor==>function constructor hamesha capital se start hona chahiye

let Info= function(fn,ln){
    this.firstName= fn
    this.lastName=ln
}

let shailesh=new Info("shailesh","tak")

shailesh.firstName="balu"
shailesh.lastName="takya"
console.log(shailesh)


// function constructor with many properties

let Info2=function(fn,ln,ag,rn,skills){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rn
    this.skills=skills
}

// ye ek template(rangoli chya dhacha sarkh) ban gaya hai jisse hum new rangoli bana sakte hai
//function constructor is template to create the object
let tushar=new Info2("tushar","ghadage",19,66,["running,swimming"])
let pravin=new Info2("pravin","shelar",20,55,["sleeping,eating"])
console.log(tushar)
console.log(pravin)

pravin.age=33
console.log(tushar)  // pravin ki age change karne se tushar ki age change nahi hogi because memory alag create hui hai
console.log(pravin)

// inserting method in function constructor


Info2=function(fn,ln,ag,rn,skills){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rn
    this.skills=skills
    this.numberSkills= function(){
        console.log(this.skills.length)
    }
    
}
let raju= new Info2("raju","das",35,16,["cooking","driving"])
let mukesh=new Info2("mukesh","das2",30,10,["serving","driving"])
    console.log(raju.firstName)
    console.log(raju.lastName)
    console.log(raju.age)
    console.log(raju.rollNo)
    console.log(raju.skills)
    raju.numberSkills()
    console.log(raju)
    console.log(mukesh)

//har object ko method attach ho kar ke aa rahi hai ==>method matlab jo function humne oibject me use kiya hai wo
//but hume wo ab nahi chahiye ki wo output me dikhe
//baki ke keys and values different hai sabke liye but ye function jo ki method ban gaya hai wo sabke liye same hai
//ab yaha se tricky part start hota hai

// yaha pe raju aur mukesh function constructir se bane hai to hum bol sakte hai==>instance of function constructor

console.log(raju instanceof Info2)  // true ayega

console.log(mukesh instanceof Info2)  // true ayega

//**********************************/

//every object in javascript has property====> __proto__
//__proto__ ye object jisse bana hua hai uske prototype property se similar hai
//object======>__proto__====>parent.prototype

console.log(raju.__proto__===Info2.prototype)  //true ayega
console.log(raju.__proto__===Info.prototype)  //false ayega


// Date-23-05-2022
// There are four methods by which object is made==>1)Object literal
//                                                   2)Function constructor
//                                                   3)Es6 class
//                                                   4)object.create



//Object literal(but isme baar baar puri information likhni padti hai)


let saurabhOne={
    fullName:"saurabh1 shuke",
    age:24,
    city:"pune",
    subjects:["microbiology","botany"]

}

let saurabhTwo={
    fullName:"saurabh2 shuke",
    age:23,
    city:"Ambegaon",
    subjects:["history","geography"]

}

// function constrtuctor(isse ek line me object tayar hota hai,but ye bhi abhi purana tarika ho chuka hai )
//Program 1
let Info5=function(fn,ag,cy,sub){
    this.fullName=fn
    this.age=ag
    this.city=cy
    this.subject=sub

}
let priya=new Info5("priya",22,"Nagpur",["pharmacy","biochemistry"])
console.log(priya)


//object===>properties and methods

//Program 2

// let Clothes=function(nm,ty,clr,ct){
//     this.name=nm
//     this.type=ty
//     this.color=clr
//     this.comfort=ct

//     this.colorDisplay=function(){
//         console.log(`Clothe's color is ${this.color}`)
//     }
// }
// let linen=new Clothes("linen","office-wear","white","moderate")
// let raymonds=new Clothes("raymond","meeting-wear","black","good")

// console.log(linen)
// console.log(raymonds)

//baki ke sab properties different hai donho objects me,but colorDisplay ye property ye attach hoke aa rahi hai object ko
// to hume is property ko separate out karna hai
// ye hamara problem statement tha
//hume isse solution nikalna hai

//object===>

// syntax===>obj.__proto__===>parent.prototype

// console.log(linen.__proto__===Clothes.prototype)
// console.log(linen instanceof Clothes)


//solution to problem statement====>

// colorDisplay naam ki property parent.prototype me likho object me nahi

let Clothes=function(nm,ty,clr,ct){
    this.name=nm
    this.type=ty
    this.color=clr
    this.comfort=ct

}
Clothes.prototype.displayColor=function(){
    console.log(this.color)
}
let linen=new Clothes("linen","office-wear","white","moderate")
let raymonds=new Clothes("raymond","meeting-wear","black","good")

console.log(linen)
console.log(raymonds)
// ab yaha pe object ko attached displayColor() method nhi dikhegi kyuki humne usko parent.prototype me liya hai
//but wo call karne pe dikhegi

linen.displayColor()
raymonds.displayColor()

// displaColor() ye method object ko attach nahi phir bhi kahi se to(parent.prototype se) object ne usko "inherit" kar liya hai
//isiko "prototype-inheritance" bolte hai
// humara purpose solve ho raha hai ki displayColor() naam ki method har object ke sath attach hoke nahi aa rhi

//linen.__proto__===Clothes.prototype

//object method ko inherit kar raha hai to parent ke saare methods child me(object me )aayege
//we can see it on html
//lekin child ke methods reverse parent me inherit nhi ho sakte

console.log(linen)
console.log(Clothes.prototype)


//Array

let names=["shubham","pravin","tushar","bapurav"]
let city=["osmanabad","indapur","nagpur","ambegaon"]

// yaha maine array ke 2 objects banaye(jaise ki maine array ke banaye the)
//yaha aise object pe array ki methods nahi dikhegi
//but uske obj.__proto__me method rahegi

console.log(names.pop())
console.log(city)

console.log(names.__proto__===Array.prototype)

//hum inbuilt datatype pe bhi methods daal sakte ho,lekin aisa karna nahi chahiye,aisa karne se problem create hoti hai


// function constructor

let Mammal=function(name,legs){
    this.name=name
    this.legs=legs

}
Mammal.prototype.color=function(){     // ye method hai
    console.log('blue')
}
Mammal.prototype.region="African"        // ye property hai

let lion=new Mammal("lion",4)
let anaconda=new Mammal("anaconda",0)

console.log(lion)
console.log(anaconda)
// normal object call karne pe color naam ki method nhi dikhegi but wo uske prototype me dikhegi

console.log(lion.region)
console.log(anaconda.region)
// but agar property ko call karta hu to color method display hogi,kyuki color method iss bar prototype se inherit ki hai

// matlab lion aur anaconda ki "region" ye khud ki property nhi hai,unhone prototype se inherit ki hai

console.log(lion.hasOwnProperty('name')) // ye khud ka hai to true dega
console.log(lion.hasOwnProperty('region')) //ye mammal.prototype se inherit ki hai to ye false aayega

//lion.__proto__===Mammal.prototype
//anaconda.__proto__===Mammal.prototype


//**************************************************************************//

//function Es6 class

let student10=function(fn,age,rollNo){
    this.fullName=fn
    this.age=age
    this.rollNo=rollNo
}
student10.prototype.displayName=function(){
    console.log(this.fullName)

}
let rohan=new student10("rohan kasabe",18,60)
console.log(rohan)
console.log(rohan.age)
console.log(rohan['age'])
rohan.lang="Marathi"
delete rohan.fullName
console.log(rohan)

// Es6 class 

class student20{
    constructor(fn,ag,rollNo){
        this.fullName=fn
        this.age=ag
        this.rollNo=rollNo
    }
    displayName(){
        console.log(this.fullName)
    }
}
let kishor=new student20("kishor kasabe",20,50)
console.log(kishor)

// Es6 
//old way to write code like object literal

class Clothes5{
    color=undefined
    type=undefined
    occasion=undefined
}
let linen5=new Clothes5()
console.log(linen5)

linen5.color="green"
linen5.type="medium comfort"
linen5.occasion="meeting"


// now using function constructor

class Subject2{
    constructor(subName,bookSize,notesAvailable){
        this.subName=subName
        this.bookSize=bookSize
        this.notesAvailable=notesAvailable

    }
   
}
let zoology=new Subject2("zoology","big","available")
console.log(zoology)


// set method


class Actor{
    setSkills(skl){
        this.skills=skl
    }
    setExperience(exp){
        this.experience=exp
    }
    setStyle(sty){
        this.style=sty
    }
    setDance(dan){
        this.dance=dan
    }
}
let ntr=new Actor()
console.log(ntr)
ntr.setSkills("fat but active")
ntr.setExperience("25 yrs")
ntr.setStyle("attractive")
ntr.setDance("amazing")
console.log(ntr)


//Es6 
//Encapsulation
//Inheritance
//Polymorphism

//Abstraction  // interface--typescript


class Bank{
    constructor(accName,accNo,city,bal){
        this.accName=accName
        this.accNo=accNo
        this.city=city
        this.bal=bal
        this.transaction=[]
    }
    deposit(amount){
        this.bal=this.bal+amount
        this.transaction.push(amount)
        return this.bal

    }
    withdrawl(amount){
        if(this.bal>amount){
            this.bal=this.bal-amount
            this.transaction.push(amount)
            return this.bal
        }
        else{
            console.log("isnufficient bal")
        }
    }
    lastFourTransaction(){
        console.log(this.transaction.slice(-4))
    }
}
let shubham=new Bank("shubham Kamble","12345","pune",20000)
console.log(shubham)

shubham.withdrawl(1000)
shubham.deposit(5000)
shubham.withdrawl(1000)
shubham.deposit(5000)
shubham.withdrawl(1000)
shubham.deposit(5000)
shubham.withdrawl(1000)
shubham.deposit(5000)
shubham.withdrawl(1000)
shubham.deposit(5000)
shubham.lastFourTransaction()



























































