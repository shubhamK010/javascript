// synchronus - jaise  maintain kiya hai waisa hi execution hoga

function First(){
    console.log("First is executed")
    alert('hello')

}
function Second(){
    console.log("Second is executed")
}

First()
Second()

// asynchronus-- jab hum js me koi code asynch banate haqi to koi code ka execution wo rokta nahi hai means jo fast hai wo pehle execute hoga


function First(){
    setTimeout(function(){
        console.log('First is executed')

    },2000)

}

function Two(){
    console.log('Two is executed')
}
First()
Second()


// yaha upar two ka execution pehle hoga baad me wo timeout function wala execution hoga

// ab mujhe niche ke order me print chahiye----->
//1)console.log('id created')
//2)console.log('user retrive')
//3)console.log('user update')


// isme ek problem aayega ,us problem ko "call back hell" bolte hai


// function study(){
//     setTimeout(function(){

//         console.log('id created')

//     },2000)

//     setTimeout(function(){

//         console.log('user retrive')

//     },1000)
//     setTimeout(function(){

//         console.log('user update')

//     })
// }
// study()


// pehle pareshani wala code likhte the ,jisme kisi bhi order me cheeje milti thi usko "call back hell" bolte hai



function study(){
    setTimeout(function(){
        console.log('id created')
        setTimeout(function(){
            console.log('user retrive')
            setTimeout(function(){
                console.log('user update')
            })

        },1000)

    },2000)  
}
study()


// yaha pe upar ek 'triangle' banta hua dikh raha hai ,,isiko call back hell bolte hai
// but yaha pe synchronus order maintain ho gaya hai
//call back hell bohot complicated hota hai jab ki huamara code badta hai wor duration badta hai
// isiliye iske upar solution niakala,jisko bolte hai --- "Promisses"
// i.e. call back hell ko hum promisses se solve kar sakte hai....kyon ki call back hell me ek ke andar ek ke andar ek ke andar function lete

// Promisses---Es6 promisses

// Promisses are the new way of handling the async code for synchronus execution in js.



let pro = new Promise(function(resolve,reject){

    let a = 20
    let b = 20
    if(a==b){
        resolve("succesful")
    }
    else {
        reject("fail")
    }
})

//consuming promise
// pro.then(function(str){
//     console.log(str)               // it is for resolve


// },function(str){
//     console.log(str)               // it is for rejett


// })

// in dono me se abhi pehle wala chalega..and "succesful" return karega


// consuming promise with then block
// then block tabhi chalega jab promise resolve hoga

// pro.then(function(){
//     console.log(a)
// })
// .catch(function(a){  // agar upar ka nahi chalta hai to uske liye catch block return hoga
//     console.log(a)
// })

// itna hi cypress ke liye jaroori hai

