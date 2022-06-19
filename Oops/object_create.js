//object literal
// let shubham={
//     firstName:"shubham",
//     lastName:"kamble",
//     age:18,
//     rollNumber:50
// }

// console.log(shubham)

// function constructor

// let Student=function(firstName,lastName,age,rollNumber){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//     this.rollNumber=rollNumber
// }

// let pravin=new Student("pravin","shelar",20,23)
// console.log(pravin)

//Es6 class

// class Candidate{
//     constructor(firstName,lastName,rollNumber,age){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.rollNumber=rollNumber
//         this.age=age
//     }
// }

// let tushar=new Candidate("tushar","ghadage",15,56)
// console.log(tushar)


//Object.create

let bapurao=Object.create({})
console.log(bapurao)

//add

bapurao.firstName="bapurao"
bapurao['lastName']="shelar"
bapurao.age=14
bapurao.rollNumber=99

//delete
delete bapurao.age

console.log(bapurao)

//Object create method with prototype....to calculate my age

let info={
    cal:function(){             // ye pura cal object ke matlab info ke prototype me chala jata hai
        console.log(2022-1998)

    }
}
let anshu=Object.create(info)
anshu.cal()
console.log(anshu) // jo ki pura cal object ke matlab info ke prototype me hai islye ye normally hum anshu print karne se wo cal object nahi dikhega ..lekin uska proto property print karte hai to dikhega
//                 //yaha hume blank object milega kyuki cal object info ke prototype me hai

console.log(anshu.__proto__)

//***********************************//

let info2={
    cal(){
        console.log(2022-1998)
    },
    details(firstName,lastName,age,rollNumber){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age
        this.rollNumber=rollNumber
    }
}
let kanha=Object.create(info2)
kanha.details("kanha","kasabe",8,24)
console.log(kanha)


//Encapsulation
//static() method 
//Oops

class Bank{
    static rajubhai(){
        console.log("Welcome to bank")
    }
}
Bank.rajubhai()



//for while
//program

for (let i=0;i<5;i++){
    console.log(i) // it will give values from 1 to 4
}





for(let i=0;i<4;i++){
    if(i==3){
        break
    }
    console.log(i)  // it will give 1,2
}




// to get reverse count from 10 to 0

let s=10

while(s>=0){
    console.log(s)
    s--
}





//to get output reverse from 10 to 3
let p=10
while(p>=0){  // whille lagane pe wo particular value chod deta hai aur uske aage ka print karke dega
    if(p==2){
        break // break lagane pe uske aage ka print nahi karta
    }
    console.log(p)
    p--
}
console.log("**************")

// continue
// to print reverse from 5 to 0 but exclude 2
let w=5
while(w>=0){
    if(w==2){
        w--
        continue
    }
    console.log(w)
    w--
}