//Program One

class GrandFather{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}
class Father extends GrandFather{
    greet(){
        console.log('Hello')
    }
}

// let pandurang=new Father("arjun","kamble")
// console.log(pandurang.firstName)
// console.log(pandurang.lastName)
// pandurang.display()
// pandurang.greet()


// let arjun=new GrandFather('arjun','kamble')
// console.log(arjun)
// arjun.display()
//arjun.greet()  // it will not work,because we cannot inherit reverse means from child to parent



// Program 2

class GrandFather2{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    display(){
        console.log(this.firstName+" "+ this.lastName)
    }
}
class Father2 extends GrandFather2{
    constructor(gFatherName,lastName,fFirstName){
        super(gFatherName,lastName)
        this.fFirstName=fFirstName
    }
    display(){
        console.log(this.fFirstName+this.lastName)
        super.display()
    }
}
let pandurang2=new Father2("arjun","kamble","arjun")
console.log(pandurang2.firstName)
console.log(pandurang2.lastName)
console.log(pandurang2.lastName)

pandurang2.display()


// program 3

class Student{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln

    }
    displayName(){
        console.log(this.firstName+" "+this.lastName)
    }
}
class Teacher extends Student{
    constructor(fn,ln,salaray){
        super(fn,ln)
        this.salary=salaray

    }
    displaySalary(){
        console.log(this.salary)
    }
    
}
class Professor extends Teacher{
    constructor(fn,ln,salaray,spec){
        super(fn,ln,salaray)
        this.spec=spec
    }
    displaySpec(){
        console.log(this.spec)
    }
}
let akshay=new Professor("akshay","bhore", 12345, "Marathi")
console.log(akshay.spec)
console.log(akshay.salary)
console.log(akshay.firstName)
console.log(akshay.lastName)

akshay.displayName()
akshay.displaySalary()
akshay.displaySpec()


















