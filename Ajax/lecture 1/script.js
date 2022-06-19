//diiference between sync and async


//synchronus execution

function addition(){
    console.log(10+10)
}

function addition2(){
    console.log(20+20)
}

addition2()
addition()                    // matlab yaha hum jo pehle call karte hai wo pehle execute hoga...use synchronus execution bolte hai


//Real time me API is asynchronus but its execution should be synchronus

//1)create user
//2)id retrive
//3)get user by id
//4)id update
//5)id delete
//aisa agar ek ke baad ek executuo hota hai to hi use synchronus bolenge



//isme hum use karte setTimeout function jo ki khud hi asynchronus hai,kyuki hum isme time set karte

function check(){
    setTimeout(function(){
        console.log('user created')
    },2000)

    setTimeout(function(){
        console.log('id retrived')
    },1000)

    setTimeout(function(){
        console.log('get user by id')
    },3000)

    setTimeout(function(){
        console.log('update user by id')
    },2000)

    setTimeout(function(){
        console.log('delete user by id')
    },1000)
}
check()     //ab ye jo run hoga wo wo jo humne time set kiya hai us hisab se hoga...jiska time kab wo pehle execute hoga,lekin ye asynchronus hoga


//we have one solution to get synchronus execution==>called as callback hell


//callback hell==>ek ke andar ek execution

function check2(){
    setTimeout(function(){
        console.log('user created')
        setTimeout(function(){
            console.log('id retrived')
            setTimeout(function(){
                console.log('get user by id')
                setTimeout(function(){
                    console.log('update user by id')
                    setTimeout(function(){
                        console.log('delete user by id')
                    },1000)
                },1000)
            },2000)
        },3000)
    },4000)

}
// isi triangle ko callback hell bolte,jo ki kama acche se karta hai lekin ek ke andar ek likhne me bahut crtical lagta hai

    // is callback hell pe jo solution nikla hai use 'promises' bolte hai

let pro = new Promise(function(resolve,reject){
    let a=50
    let b =50

    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
pro.then(function(str){
    console.log(str)

},function(str){
    console.log(str)

})


//yaha promises me mai function ko as a parameetr function bhej sakta hu
//Q.lekin yaha maine indirectly kisko pass kiya hai?==>ans.constructor ko pass
//we use constructor set property of object at the time of object creation
//mai new promise baana rahu hu matlab..mai new object bana raha hu matlab..mai uske function ko constructor pass kar raha hu jisme ki 2 parameters hai -->resolve and reject

let pro2=new Promise(function(resolve,reject){
    let word="shubham"

    if(word.length>=7){
        resolve(["pravin","tushar","saurabh"])
    }
    else{
        reject([10,20,30])
    }

})

pro2.then(function(arr){
    console.log(arr[1])
},function(arr){
    console.log(arr[1])

})



let pro3=new Promise(function(resolve,reject){
    let word="shubham"

    if(word.length>=10){
        resolve(["pravin","tushar","saurabh"])
    }
    else{
        reject([10,20,30])
    }

})

pro2.then(function(arr){
    console.log(arr[1])
},function(arr){
    console.log(arr[1])

})