//Topic=>Encapsulation==>matlab cheejo ko private kaisa rakha jayega yeh hai Encapsulation..aur isme js ke different methods hai
//means aap directly object ke properties directly update karke access nahi kar sakte
//hence you can update and call it by method only
 

class Employee {
   constructor(name,age,salary){
         this.name = name 
        this.age = age 
        this.salary = salary
     }

     updateName(nm){
         this.name = nm
     }
     updateAge(ag){
        this.age = ag
     }
     updateSalary(sl){
        this.salary =sl
    }


     getName(){
         return this.name 
    }
    getAge(){
      return this.age
    }
     getSalary(){
        return this.salary
    }
 }

 let pravin = new Employee('pravin shelar',18,28)


 // program one 
// const a = 100
// if(true){
//     let aa = 10
// }

// {
//     let c = 11
// }
// console.log(a)
// console.log(aa)
// console.log(c)


// functions 


// const printName = function(){

//     let firstName = "tushar "
//     let lastName = "ghadage" 

//     let printFullName  = function(){
//         console.log(firstName +" "+lastName)
//     }

//     return printFullName
    
// }

// printName()()

// to mainain privacy===>encapsulation is important


// closure ===> js ka ye concept hai jo privacy maintain karne me help karega
//return should be the last statement of function
//closure ka meaning ye rehta hai ki return likhne baad bhi uske upar ke parent ke function accesible rehte hai
//hum wo parent ke function ko directly accesible nahi kar rhe hai...yeh bhi ek privacy maintain karne ka tarika hai


// function add(){
//     let a = 20
//     let b = 50
//     return function(){
//         console.log(a)
//         console.log(b)
//     }
  
// }
// let a = add()
// a()


// const printName = function(){

//     let firstName = "amshu"
//     let lastName = "kasasbe" 

//     let printFullName  = function(){
//         console.log(firstName +" "+lastName)
//     }

//     return printFullName
    
// }

// printName()()

//yaha pe bahar function call kar sakye hai,lekin andar return aur function ka name hona chahiye




// program 3
// class  Student {
//     constructor(){
//         let firstName = "vaibhav"
//         let lastName = "dhavale"
//         this.printName = function(){
//             console.log(firstName + lastName)
//         }

//     }


// }
// let xyz = new Student()
// xyz.printName()
// console.log(firstName)
// console.log(lastName)

//hum yaha yeh karna chahte the ki object ki properties jo hoti hai wo bahar accesible nahi honi chahiye
//kyuki let se andar define kiya to bahar call nahi kar sakte,uska scope blocked ho jata hai
//***************************// 
//ye ek convection hai ki jab hum underscope use karte hai to usko private variable consider kiya jata hai
//convection matlab agar use waha pe likha hai to use call nahi karna chahiye


// class Student2{
//     constructor(firstName,lastName){
//         this._firstName = firstName
//         this._lastName = lastName
//         this.printName = function(){
//             return this._firstName + this._lastName 
//         }
//     }

// }

// let bapurao = new Student2("bapurao","shelar")
// console.log(bapurao.printName())



//*********************************************************************/]/

//Revision of let and var scope



// {
//     let a = 10
//     console.log(a)
// }


// console.log(a)

// {

//     const a = 10
//     console.log(a)

// }

// console.log(a)


// let a  =10 
// a = 30
// console.log(a)


// const h = 10
// h = 30

// var e = 10 

// {
//     consoe.log(e)
// }

// function adds (){
//     var ha = "pune"
//     console.log(ha)

// }

// adds()
// console.log(ha)


let a = 10 

function addp (){
    a = 30
    console.log(a) // 30
}

addp() 
console.log(a) // 30




let b1 = 10 

function addp (){
    let b1 = 30
    console.log(b1)  // 30
}

addp() 
console.log(b1) //10