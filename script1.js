// //we are learning this for studying 'fixtures' from cypress
// //so we are making base to study cypress 

var fName = "tushar"
var lName = "ghadage"

let student={
    firstName:"shubham",
    lastName:"kamble",
    rollNumber:18,
    display:function(){
        console.log(this.firstName+this.lastName)
    }
}

student.display()

// let x = 20
// //window.x

//But problem starts when we write one program in another program

//Program 2=
//function declaration as second function
let candidate={
    fName:"pravin",
    lName:"shelar",
    age:20,
    display:function(){
        console.log(this.fName)
        console.log(this.lName)

        function display2(){
            console.log(this.fName , this.lName) 

        }
        display2()
    }

}
candidate.display()

// // if we take function inside function then the scope of this changes go to global
// // this is the problem in cypress comunity
// //so we use arrow function


// //Program=
// // function expression as second function

let candidate2={
    fName:"pravin",
    lName:"shelar",
    age:20,
    display:function(){
        console.log(this.fName)
        console.log(this.lName)

        let display3=function(){
            console.log(this.fName , this.lName) // this is function expression so that scope of the seconde function goes to global

        }
        display3()
    }

}
candidate2.display()

//Program 4=
//arrow function as second function


let candidate3={
    fName:"pravin",
    lName:"shelar",
    age:20,
    display:function(){
        console.log(this.fName)
        console.log(this.lName)

        let display4=()=>{
            console.log(this.fName , this.lName) // this is arrow function so that scope of the seconde function goes to its immediate parent


        }
        display4()
    }

}
candidate3.display()

//Program 5=
// now both functions with arrow function

let candidate4={
    fName:"pravin",
    lName:"shelar",
    age:20,
    display:()=>{                    // here also we are using arrow function so that scope go to global and for both function scope is global
        console.log(this.fName)
        console.log(this.lName)

        let display5=()=>{
            console.log(this.fName , this.lName) // this is arrow function so that scope of the seconde function goes to its immediate parent


        }
        display5()
    }

}
 candidate4.display()


// // lexical scope= properties of parents with respect to function are accesible in child
// // means child can accsess values of parents but parents cannot access values of child...it gives undefined error

function additionA(){
    let x = 20
    let y = 30
    console.log(x+y)

    function additionB(){
        let j=100
        let k=200
        console.log(x+y)
        console.log(j+k)
         console.log(x+y+j+k)
       

        function additionC(){
            let s=150
            let r=250
            console.log(x+y+j+k)
            console.log(s+r)
        }
        additionC()

    }
    additionB()
}
additionA()



// Difference related to Assignment or Updation
// let and const and var

let x =20
console.log(x)

x=200
console.log(x)

// var and let ko agar tumne global scope me define kiya to un dono me koi difference nahi hai
// let and var me value reassign i.e.update kar sakte hai
var s = 400
console.log(s)

s = 450
console.log(s)

// we cannot reassign i.e. update value in constant

// const y = 100
// console.log(y)

//  y = 120


// Difference related to Scope

//var is function scoped else everywhere global scoped

// let and constant are blocked scope


let amount1= 800
{
    console.log(amount1)
}

{
    var amount2 = 33
}
console.log(amount2)


// let and const
// let and const are not accesible outside block

{
    let amount3 =44

}
console.log(amount3)

{
const amount4 = 125

}
console.log(amount4)

//but if let and const are defined in script file then they are accesible in complete script file

let file = 5000
{
    console.log(file)
}


let amount5 = 300
{
    let amount5 = 170
    console.log(amount5) // 170
}
console.log(amount5) // 300


let amount6 = 300
{
    amount6 = 170
    console.log(amount6) // 170
}
console.log(amount6) // 170

// yaha pe block ke andar let nahi use kiya matlab hum bahar ki let wali value ko hi update kara rahe hai
// var is a function scope means agar wo function ke andar likha hua hai to wo fir function ke andar hi khatma ho jayega
// aur agar var globally define hai i.e. function ke bahar to wo sab jagah accesible hai

console.log('*********************')
let amount7 = 400
var amount8 = 300

function sets(){
    var amount8 = 600
    console.log(amount7) // 400
    console.log(amount8)//600
    {
        console.log(amount8)//600
        let amount7 = 7000
        console.log(amount7)//7000
    }
    amount7 = 9000
}
console.log(amount7)//400
sets()
console.log(amount7)//9000



























