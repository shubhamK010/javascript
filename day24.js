// comparision operators

//< , > == , != , === , <= , >= , !== , ==

// basic --- === or ==

console.log(8 === '8')
console.log(8 == '8')
console.log(8 !== '7')
console.log(8 !== '8')



// AND 
// True True  - True
// True False - False
// False True - False
// False False  - False


// OR
// True True  - True
// True False - True
// False True  - True
// False False - False

// NOT 
// ! True - False
// !False - True

// Conditional statements are used when ek single cheez ke liye ek se jyada output milenge

//marks ==> 'A' || 'B'||'C'

//if marks>90-------> A grade
// if marks > 60 && < marks<== 90--------B Grade
//if marks<60------>C 


// Why do we define varioables in javascript?
//Ans. To define a state



// if----- isme me saari conditions check hoti hai
// let marks = 95

// if(marks>90){
//     console.log('You got A grade')

// }
// if(marks >60 && marks <=90){
//     console.log('You got B grade')
// }
// if(marks<60){
//     console.log('You got C grade')
// }


// let marks2 = 66

// if(marks2>90){
//     console.log('You got A grade')

// }
// if(marks2 >60 && marks <=90){
//     console.log('You got B grade')
// }
// if(marks2<60){
//     console.log('You got C grade')
// }

// let marks3 = 48

// if(marks3>90){
//     console.log('You got A grade')

// }
// if(marks3 >60 && marks <=90){
//     console.log('You got B grade')
// }
// if(marks3<60){
//     console.log('You got C grade')
// }

// // else if----- agar pehli condition true hoti hai to dusri chekck hi nahi karega
// //              agar saari conditions false hai to khali "else" print karega
// let marks5 = 95

// if(marks5>90){
//     console.log('You got A grade')

// }
// else if(marks5 >60 && marks <=90){
//     console.log('You got B grade')
// }
// else if(marks5<60){
//     console.log('You got C grade')
// }
// else{
//     console.log('hello')
// }

// // switch case condition------jaha se match hota hai uske niche ke sare print kar dega
// // agar case match hoti nahi to direct default print kar dega

// let city = "Dhule"

// switch(city){

//     case "Osmanabad":
//         console.log("Auranagabad region")
//     case "Satara":
//         console.log("Pune region")
//     case "Wardha":
//         console.log("Nagpur region")
//     case "Dhule":
//         console.log("Nashik region")
//     default:
//         console.log('Please Enter correct city')            
        
//}

// break statement----jaha pe match hota hai na uske niche ka hi print karke exit kar leta hai

let city5 = "Nanded"

switch(city5){

    case "Osmanabad":
    case "Nanded":
        console.log("Auranagabad region")
        break 
    case "Satara":
    case "Solapur":    
        console.log("Pune region")
    case "Wardha":
        console.log("Nagpur region")
    case "Dhule":
        console.log("Nashik region")
        break
    default:
        console.log('Please Enter correct city')            
        
}

// loops

for(let i=0;i<4;i++){ // initialise,condition check,print--->increment,condition check,print
    console.log(i) //0// 1//2//3
}

// reverse loop (to print 10 to 1)

for(let i=10; i>=0 ; i--){ // 10//9//8//7//6//5//4//3//2//1//0
    console.log(i)
}

//syntax of for loop
//for(initialisation;condition check ;incremnet/decrement){
    //  statements
//}

// initialisationa and increment/decrement can be written outside the bracket as given below
// let k = 0
// for(;k<5;){
//     console.log(k) // k<5 remains always true so it goes in infinite loop
//     k ++  // or we can write k = k+1 or k+ =1
    
//    }


// break keyword----- every programming language has break keyword and for keyword
//                    used to break or terminate the loop
//                    jya false value ahet tyach print honar
//                    true value ali ki loop chya baher yenar,loop tithech break honar

for(let i =0;i<5;i++){
    if(i==2){ // 2==2 if this condition becomes true then loop breaks and stops
       break
    }
    console.log(i)// 0//1//2--mhanje ya wrong values print zalyat
}


// continue-----iske niche jo bhi likha hoga na wo execute nahi hoga,waha se loop continue ho jayega
//              fakt false value print karnar
//              ji value true ahe ti print honar nahi pan loop last paryant chalnar


for(let i =0;i<5;i++){
    if(i==2){ 
       continue
    }
    console.log(i) //0//1//3//4//5
}




















