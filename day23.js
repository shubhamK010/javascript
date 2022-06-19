
//Imporatnt:-

//number+string-----string
//string+number-----string
//string+string-----string
//number+number-----number

let a = 10
let b = 20
let c = "welcome"

console.log(a+b+c)
console.log(a+c+b)
console.log(c+b+a)


//   a    +   b    +    c
//   10    +  20   +  "welcome"======> 30 welcome

//   a    +     c      +    b
//   10   + "welcome"+   20========> 10welcome20

//   c      +     b      +    a
//   "welcome" +  20       +    10 ======>welcome20+10======> welcome2010


// Types of writing string

let firstName = "shubham"
let lastName = "kamble"

// concat

console.log(firstName +"  "+ lastName)


// string literals,string interpolation

// old way of writing the name
console.log("My firstName is "+firstName+" and my lastName is "+lastName)

// easy and new way of writing a name is "string literals"
// so we write string lietrals in backtics

console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)


// Comparison operators and their use(This part is asked in interviw)

// if comparison operator is "between two elements" it gives output as "boolean value"

// <  less than 
// >  greater than 
// <= less than equal to
// >= grerater than equal to
// !=  not equal to
// == equal equal to(checks absolute value only)
// === triple equal to (checks absolute value and type)
// !== notg equal equal to


console.log(5<=5)
console.log(10>11)
console.log(5==5)
console.log(5=='5') // true
console.log(5==='5') // false
// here type of first 3 is number nad type of second 5 is string
// if we use two operators == it checks absolute value only,it is not strict compariosn and hence gives true for number and string
// if we use three operators it checks absolute value and type,so it is strict comparison

console.log(2=='2')// true
console.log(2!='2') // false  // == true then != false
console.log(2 !== '2') // true because here absolute value is matches but data type is different i.e.number nad string
// 3 operators samjat nastil tar 2 use karun bagha mag 3 use kara 

console.log(10 !== 10) // false, because value and type matches in this but then also it showing not equal to means it is false
console.log(9 !== '9') // true

console.log(15 === '15') // false
console.log( 20 != '20') // false

console.log(1>5)// false
console.log(4<8)// true

console.log( 12==12) // true
console.log(12 === 13) // false
console.log(12 !== 13)// true
console.log(12 === 4) // false


//************ Logical operators*****************

//AND
// Input          Output        
//true true  ---- true
//true false  ---- false
//false true  ---- false
//false false  ---- false

// OR
//Input           Output
//true true  ---- true
//true false  ---- true
//false true  ---- true
//false false  ---- false


// NOT

//Input    Output
// true--- false
// false-- true

console.log(5>9 || 6 === '6') // false ,|| vertical lines i.e. pipes used for "or"
//         false or false---------false

console.log(5>9 || 6 == '6') // true 
//         false or true--------true

console.log( 3 !=='3' && true)// true  
//            true  &   true-----true


console.log( ! true)// false, not true= false
//           false

console.log(! false) // true, not false = true
//            true

console.log(4 * 5 > 16 || false)// true
//         21>16 i.e. true or  false----true


// conditional statement
// if there are multiple output on single entity,we use conditional statement

// if(condition()){

//     // output of conddition will always be in boolean
//     //this will run if condition is true otherwise else block will run
// }
// else{
//}

if( 10 !== '10'){

    console.log("hello")

}
else{
    console.log("bye")
}


if( 10 !== '10' && false){

    console.log("hello")

}
else{
    console.log("bye")
}

//Truthy and Falsy value in js

//true values in js----positive number(1),negative number(-1),single character('A') i.e.single letter
//                     6>5
//false values in js----undefined,null,0,NaN i.e. Not a Number,false, 7==='7'

let aa ;
console.log(aa)


// if( undefined){

//     console.log("hello")

// }
// else{
//     console.log("bye")
// }

// if( null){

//     console.log("hello")

// }
// else{
//     console.log("bye")
// }

// if( 0){

//     console.log("hello")

// }
// else{
//     console.log("bye")
//}

// if( -1){

//     console.log("hello")

// }
// else{
//     console.log("bye")
// }

// if( 1){

//     console.log("hello")

// }
// else{
//     console.log("bye")
// }



// if( "A" ){

//     console.log("hello")

// }
// else{
//     console.log("bye")
// }


if( NaN){

    console.log("hello")

}
else{
    console.log("bye")
}












