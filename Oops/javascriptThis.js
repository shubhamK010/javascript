// let shubham={
//     firstName:"shubham",
//     lastName:"kamble",
//     printName:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// shubham.printName()

// console.log(shubham.printName)    // hum yaha function ko call nahi kar rahe,isiliye printName ki value pura function ayega jo shubham naam ke object me hai 

// let printName2 = shubham.printName  //iski value wo function hai jo line number 5 pe hai

// printName2=function(){
//     console.log(this.firstName+this.lastName)

// }

// printName2()  // yah afunction kko call kiya hai,to output me shubham kamble nahi ayega,kyuki this ko maine bracket ke bahar aake call kiya hai,isiliye uska scope change ho jaata hai,aur uska scope window ko chalat jata hai,aur window me or global scope me firstName,lastName nahi hai isiliye uska output undefined aayega
// //             undefined+undefined=NaN 
// //             yaha pe .this ki value set nahi ho rahi...to yeh cheej hum fix kar sakte hai bind method se





// // program 2

// let pravin={
//     firstName:"pravin",
//     lastName:"shelar",
//     displayName:function(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// pravin.displayName()  // yaha pe function ko call kiya hai to 'pravin shelar' output ayega
// console.log(pravin.displayName)// output pura function expression ayega

// let a=pravin.displayName
// // means
// let ab=function(){
//     console.log(this.firstName+this.lastName)
// }

// ab()  // yaha pe .this ki value set nahi ho rahi,global scope ko assign ho rhi kyuki object ke bahar aake hum call kar rahe hai,yo hume undefined+undefined=NaN ayega
// //      matlab object ke bahar aake call karte hai to reference hat jata hai








let tushar={
    firstName:"tushar",
    lastName:"ghadage"
}

let bapurao={
    firstName:"bapurao",
    lastName:"shelar"
}

let displayName=function(){
    console.log(this.firstName+this.lastName)
}

let fn=displayName.bind(tushar) // yaha pe bind ne .this ki value set kar di hai aur wo hai "tushar"
fn() //yaha pe output ayega tushar ghadage

//     mhanje bind method hi function return karte ani apan tyala fn madhe store kele ani nantr te call kele

displayName.bind(bapurao)() // matlab har baar hum jaisa ek variabl;e leke value store karte hai waisa na karke function kko udhar hi call kiya hai...khali round braces use karke
//                          ye round braces use karne se hum direct udhar hi call karte hai


//another example
function add(){
    return function(){
        console.log('hello')
    }
}
add()()  // directly function ko yaha call kiya hai...variable me store karne ki jaroorat nahi hai



//Program 3


function displayName3(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
}
let anshu={
    firstName:"anshu",
    lastName:"kasabe"
}

let kanha={
    firstName:"kanha",
    lastName:"kasabe"
}

//call naam ki method hai,ye koi function wgaira kuch bhio return nahi karti...hum directly us method pe .this ka reference call kar sakte hai

displayName3.call(anshu)
displayName3.call(kanha)

// pehle humne .this ki value bind se set ki
//dusri baar .this ki value call se set ki
//ab "apply" se
//aise hi "apply" nnam ki method hai..but apply me hum jo .this ka value bhejto hai wo array bhejte hai..matlab parameter me hum array bhejte hai

let display4= function(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}
let viraj={
    firstName:"viraj",
    lastName:"rasal"
}

let harshali={
    firstName:"harshali",
    lastName:"rasal"
}
display4.apply(viraj,['goodnight'])



//program 4

let w={
    firstName:"shubham",
    lastName:"kamble",
    displayName5:function(){
        console.log(this)             //yaha pe .this ka value pura object hai matlab 'w' hai
        console.log(this.firstName,this.lastName)

    }
}
w.displayName5()


let s={
    firstName:"shubham",
    lastName:"kamble",
    displayName5:()=>{                // yaha pe mai agar function expression ki jaga arrow function use karta hu to uska scope global ho jata hai..matlas s ke parent ko scope jayega i.e.window ko/global scope ho jayega aur output undefined+undefined=NaN ayega
        console.log(this)             //yaha pe .this ka value pura object hai matlab 'w' hai
        console.log(this.firstName+this.lastName)

    }
}
s.displayName5()



// to ye ho gaya .this keyword ka use har alag alag format me








