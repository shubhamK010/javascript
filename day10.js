// revision new batch day 2

let x= 10
x = 300
console.log(x)

//const g = 100
// console.log(g)
//g = 200 

let a = 10
let b = 20

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let y = 10
let r = 2

console.log(y+r)
console.log(y-r)
console.log(y*r)
console.log(y/r)
console.log(y%b)


function cal(x,y){

    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)

}
    cal(12,13)
    cal(200,14)

/*........................*/

// function
// function without parameter and without return type

function add(){
    console.log(9+9)
} 
    add()
    add()
    add()


// function with parameter and without return type

function sub(x,y){
    console.log(x-y)
}
 
sub(100,50)
sub(1000,500)


// function with parameter and return type


function mul(x,y){
    return x*y
}
   let rrr = mul(100,10)
   console.log(rrr)
   console.log(rrr+100)
   console.log(rrr*0.10)


/********************************/

function greet(word){
    console.log("welcome"+ word)
    return 5
}
    greet("chinmay")
  
    let jjj = greet("yogesh")
    console.log(jjj)

    // program One
    //First type = function declaration

    function add2(x,y){
        return x+y

    }
     let ra = add2(12,13)
     console.log(ra)

// Second type =  function expression

    let add3 = function add3(x,y){
         return x+y
    }
      let ray = add3(12,13)
      console.log(ray)


// Third type = arrow function


let add4 = (x,y)=>{
    return x+y
}
    let ray2 = add4(12,13)
    console.log(ray2)





































































