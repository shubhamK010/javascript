// scope function lecture
//function declaration
function addition(x,y){
    return x+y
}
let s = addition(10,20) 
console.log(s)


// function expression

let addition2 = function(x,y){
    return x + y
}

let ra =addition2(10,20)
console.log(ra)

// arrow function

let addition3 = (x,y)=>{
    return x + y
}

let rsa =addition2(10,20)
console.log(rsa)

// Object - property and methods

//var x = 150
// console.log(window.x) // it get connected to global object
// //                      // it is property of global object

// window.alert()
// window.prompt('do you wish to leaarn javascript')
// window.confirm('do you wish to learn cypress as well?')
// window.location()



//Program One
 var firstName = "tushar"
 let student = {

        firstName:"shubham",
        lastName:"kamble",
        display:function(){
            console.log(firstName)

        }
 }

 console.log(student.firstName)
 console.log(student.lastName)
 student.display()

 // ''this'' refer to the current calling object(but it does not give same object output to last function)

var fname="ram"
let student2 ={

    fname:"pravin",
    lname:"shelar",
    display:function(){
        console.log(this.fname)
        // console.log(student2.fname)

        function student3(){
            console.log(this.fname)
            //console.log(window.fname)
        }
        student3()
    }
}
student2.display()

// to solve this problem we use arrow function



let student3 ={

    fname:"shubham ",
    lname:"kamble",
    display:function(){
        console.log(this.fname)
        // console.log(student3.fname)

        let student4= ()=>{
            console.log(this.fname)
            //console.log(studemt3.fname)
        }
        student4()
    }
}
student3.display()




// all output of window are seen in browser only
// arrow function at both the functions means value get from window 

let student4 ={

    fname:"shubham ",
    lname:"kamble",
    display:()=>{
        console.log(this.fname)
        // console.log(window.fname)

        let student5= ()=>{
            console.log(this.fname)
           // console.log(window.fname)
        }
        student5()
    }
}
student4.display()


// lexical scope----properties of parent functin are accesible in child function


function additionF(){
    

    let x = 15
    let y= 25
    console.log(x+y) // 40

    function additionG(){
        let r= 50
        let s = 20
        console.log(x+y)
        console.log(r+s)
        
        
        function additionH(){
            let j=60
            let l=30
            console.log(x+y+r+s)
            console.log(j+l)
        }
        additionH()    

    }
    additionG()
      
}
additionF()

































