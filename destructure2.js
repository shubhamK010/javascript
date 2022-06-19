

console.log("Hello")
function addition(a,b,c,d,e,f,g,h){


}
addition(11,22,33,44,55,66,77,88)

//niche parameter me jitne bhi values hai utne hi upar pass karne honge,jo ki sahi tarika nahi hai


function addition(...arr){

    console.log(arr)
    

}
addition(11,22,33,44,55,66,77,88)

//yaha line 13 me ek baar agar hume array mil jata hai to uska addition karna bhi easy ho jata hai
//yaha humne line no 19 ki value jo ki spreaded thi usko rest kar liya line no 13 me

// 11,22,33,44,55,66,77,88====>[]   rest operator



//isko rest parameter bhi bolte hai
function addition(...arr){

    return arr.reduce(function(acc,el){
        return acc+el

    },0)
    

}
let ab=addition(11,22,33,44,55,66,77,88)
console.log(ab)




//agar apne pass ek array hai jisme bahut saare numbers hai..usme se function ko starting ke 4 number function ko bhejne hai to niche ki process karo
//ye hai old way
let number=[10,20,30,40,50,60]

function addition(a,b,c,d){
    console.log(a+b+c+d)

}
addition(number[0],number[1],number[2],number[3])




// ye hai new way===> by spread operator
//isko spread parameter bhi bolte hai
let number2=[10,20,30,40,50,60]

function addition(a,b,c,d){
    console.log(a+b+c+d)

}
addition(...number2)



//array  to comma separated values===>spread operator or spread parameter
//[1,2,3,4]===>1,2,3,4

//comma separated values to array ===> rest operator or rest parameter
//1,2,3,4===>[1,2,3,4]



//agar 2 array ko milakar 1 array banana hai to niche ki process follow kar
let arr1=[1,2,3,4]
let arr2=[15,24,69]

let ab2=[...arr1,...arr2]
console.log(ab2)


/*...............................................*/
//for of loop


//old way
let student={

    fullName:"shubham",
    lastName:"kamble",
    age:18,
    rollNumber:50
}

for(let key in student){
    console.log(key,student[key])
}



//new way==>means by for of loop
//for of loop for array

let friends=["shubham","pravin","tushar"]

for(let item of friends){
    console.log(item)
}

//for of loop array pe chalaa 
//object pe bhi chalega lekin dusre method se


//for of loop for object


let student2={

    firstName:"anshu",
    lastName:"kasabe",
    age:10,
    rollNumber:20
}

console.log(Object(student2))   // Object naam ki ek method hai jo object name pe call karne se puri keys and values mil jaati hai
console.log(Object.keys(student2))  // yaha keys naam ki method hai jo ki obejct ke naam ke upar call karne se hume saari keys mil jaati hai
console.log(Object.values(student2)) // yaha keys naam ki method hai jo ki obejct ke naam ke upar call karne se hume saari values mil jaati hai
console.log(Object.entries(student2)) // yaha keys naam ki method hai jo ki obejct ke naam ke upar call karne se hume saari keys and values mil jaati hai..lekin har entry ko alag array me nikal ke dega
//line no 131 par jo milega wo ek multidimensional array hai

let [key,value]=Object.entries(student2)[0]  //['firstName','anshu ']
let [key1,value1]=Object.entries(student2)[1] 
let [key2,value2]=Object.entries(student2)[2] 
let [key3,value3]=Object.entries(student2)[3] 
//lekin hum har baar aisa nahi kar sakte 
// to hum iske jaga ek for loop likhenge keys ke liye,ek values ke liye,aur ek entries ke liye


//for keys()===> to get keys

for(let item of Object.keys(student2)){
    console.log(item)
}



// for values()===> to get values

for(let item of Object.values(student2)){
    console.log(item)
}




//for entries()===>to get entries

for(let item of Object.entries(student2)){
    console.log(item)
}
//agar is array ko hum destructure karte hai to niche wala likh sakte hai

for(let [key,value] of Object.entries(student2)){
    console.log(key,value)
}



//ternary operator==agar koi code jyada bada nahi likhna hia..short me likhna hai to ise use karte
// ye ekl single condition dene ke liye bhi use kiya jata hai


let a=10
let b=20

let ab3=a>b ? "a is greater":"b is greater"             // pehle maine question pucha ki a>b? ..question mark ke aage colon ke left side me true wali condition likhi jo ki true hone pe print hogi aur colon ke right side pe false wali condition likhi jo ki falase hone pe print hogi
console.log(ab3)               //yaha pe aa jayega b is greater



// aaj kal ek short hand matlab short cut aa gaya hai
//isko "nullish operator" bolte hai
//nullish operator


const foo= null ??'default string';   //double question mark ke left hand side pe null or undefined aata hai to jo double question mark hai uske aage wali value aayegi i.e.'default string'
console.log(foo);





let qa;  //ye undefined aane wala hai kyu ki qa ki value set nahi hai...isliye hello print hoga
let ww=qa ?? "hello"
console.log(ww)

let ww2 = 5===5 ?? "welcome"  // 2 entities ke beech me agar hum comparison operator use karte hai to output hamesh boolean me aayega..yaha pe true ayega
console.log(ww2)

let ww3=10!==10 ?? "How are you?"
console.log(ww)


let qwerty=qa || 50      //yaha beech me or operator hai...javascript me undefined ko false consider karte hai..agar qa ye false hai to uski or ki value true jo ki 50 hai to hume output me true dega
console.log(qwerty)


let qwerty2=8===8 || 50      //yaha pe true ayega..aur yaha pe 8===8 check kar ke true return karega uske aage kya hai ye dekhega nahi ,bahar niklega aur qwerty2 ko tru value return karge..isiko "short circuiting" bolte hai
console.log(qwerty2)         //or ki case me hi short circuit hota hai..and ki case me short circuit nahi hota
//                            //and case me short ciruiting nahi hai kyuki first value true true hai phir bhi second value check karta hai

let qwerty3=6===6 && 9===9
console.log(qwerty3)        // yaha pe true return karega

let qwerty4=6===6 && 9===10
console.log(qwerty4)        // yaha pe false return karega

//and case me short ciruiting nahi hai kyuki first value true true hai phir bhi second value check karta hai



//Question mark wala operator==>optional parameter

let candidate={
    brotherOne:{
        firstName:"shubham",
        lastName:"kamble",
        parent:{
            father:"pandurang",
            mother:"anuradha"
        }

    }
  

//optional parameters
//isko hum api me use karenge
    
}
console.log(candidate.brotherOne?.parent?.father)       // questin mark matlab candidate pe brotherOne naam ki property hai to hi aage jaake check karega..uske aage parent hai to father check karega
//                                                      // dot ke pehle question dedo
console.log(candidate.brotherTwo?.parent?.father)       // yaha brotherTwo naam ki property nahi to aage check nahi karega ..short circuit hoga aur undefined check karega
//                                                       //yaha pe undefined print karta hai error nahi dega
//question mark rehne ka aur n ahi rehne ka faayda niche dekho
console.log(candidate.brotherTwo.parent.father)     //yaha pe cannot read properties of undefined parent bolega
//                                                  // yaha pe error dega undefined print nahi karega








//difference between undefined and not defined
//unefined==>//agar aapne koi variable assign kiya lekin usko value nahi di to wo undefined aayega
// let sk
// console.log(sk)



//not defined==>agar aapne koi variable hi define hi nahi kiya aur usko directly print karte hai to not defined aayega

// console.log(rj)






















