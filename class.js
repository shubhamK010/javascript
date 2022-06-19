//jab mai sidha sidha aisa object banata hu to use "object literal" bolte hai

let shubham = {
    firstName: "shubham",
    lastName: "kamble",
    age: 18,
    rollNo: 30
}

let pravin = {
    firstName: "pravin",
    lastName: "shelar",
    age: 12,
    rollNo: 40

}

let tushar = {
    firstName: "tushar",
    lastName: "ghadage",
    age: 22,
    rollNo: 10

}

// yaha pe 4 properties same hai but value alag hai
//to aisa kuch template or blue-print likhna chahiye jisse object to aisa hi banepar hume hamesha 4 line ka code nahi likhna pade
//isliye hum 'class' define kar sakte hai
//class is user defined datatype
//mujhe ek ek karke object nahi banana,isliye mai class use karunga


//setting the value outside the class
class Student {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined

}
let bapurao = new Student()
console.log(bapurao)
bapurao.firstName = "bapurao"
bapurao.lastName = "shelar"
bapurao.age = 25
bapurao.rollNo = 50
console.log(bapurao)

// mhanje outside the class lihnyasathi pan 4 lines lihawya laglya
//mag normal object ihnyat ani ase lihnyat code 4 lines lihawach lagto
//ya mule apla purpose solve nahi hot
//mhanun apan as kahi lihnar ki jeva object banto tevach value set honar,class chya baher yeun value set karaychi garaj nahi padnar
//mhanunu apan "constructor" use karto

// Why constructors are used?==>to set the property at the time of object creation
class student2 {
    constructor(fn, ln, ag, rn) {

        this.fullname = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn

    }

}
let saurabh = new student2("saurabh", "suke", 19, 60)
let sid=new student2("sid","kharpude",23,88)
//ye 2 naye object bane
//lekin is baar hume object likhne ke liye 1 line likhni padi
console.log(saurabh)
console.log(sid)

//-----------------------------------------------//

//By using set method

class student3{

    setAge(ag){
        this.age=ag
    }
    setRollNo(rn){
        this.rollNo=rn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setFirstName(fn){
        this.firstName=fn
    }
    
}
let shailesh=new student3()
console.log(shailesh)  // ata hey jar print kel tar disel ki object madhe kahich property nasnar ahet,because apan te set kelech nahi,mhanun hey blank ch milnar

shailesh.setAge(25)
console.log(shailesh) // ye type karne ke baad object me ek property dikhegi
shailesh.setRollNo(55)
shailesh.setLastName("Tak")
shailesh.setFirstName("Balu")

console.log(shailesh)



//{ normal object se chutkara pene keliye===>class
//class ki pareshani door karne ke liye ===>constructor
//set method}


// //retrive
// console.log(object.firstName)

// // update
// object.age=20

// //add

// object.lang="Sanskrit"
// //delete
// delete object.rollNo