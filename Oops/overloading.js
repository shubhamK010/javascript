
let IndianBank = class {
    constructor(accName, accNumber, city) {
        this.accName = accName
        this.accNumber = accNumber
        this.city = city
    }
    deposit() {
        console.log('deposit IndainBank')

    }
    withdrawl() {
        console.log('withdrwal IndianBank')

    }
}
class SBI extends IndianBank {
    constructor(accName, accNumber, city, IFSC) {
        super(accName, accNumber, city)
        this.IFSC = IFSC

    }
    deposit() {
        console.log('deposit SBI')
        super.deposit()
    }
    withdrawl() {
        console.log('withdrawl SBI')
        super.withdrawl()

    }
}

class HDFC extends IndianBank {
    constructor(accName, accNumber, city, IFSC) {
        super(accName, accNumber, city)
        this.IFSC = IFSC

    }
    deposit() {
        console.log('deposit HDFC')
        super.deposit()
    }

    withdrawl() {
        console.log('withdrwal HDFC')
        super.withdrawl()
    }


}

let accholderSBI = new SBI("shubham", 123, "Pune", "0001")
let accholderHDFC = new HDFC("pravin", 456, "Indapur", "0002")

console.log(accholderSBI)
console.log(accholderHDFC)

accholderSBI.deposit()
accholderHDFC.deposit()

accholderSBI.withdrawl()
accholderHDFC.withdrawl()

console.log(accholderSBI.accName)
console.log(accholderSBI.accNumber)
console.log(accholderSBI.IFSC)

console.log(accholderHDFC.accName)
console.log(accholderHDFC.accNumber)
console.log(accholderHDFC.IFSC)


//polymorphism

//overloading= same class,same method,different signature(parameters)
//overriding= different class,same method,same signature(parameters)

//overloading // ya madhe last chya class cha outpur jo kahi yeil tich final value aste 

// class Calculator{
//     addition(a,b){
//         console.log(a+b)
//     }

//     addition(a,b,c){
//         console.log(a+b+c)
//     }
//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }


// }

// let cc= new Calculator()

// cc.addition(1,2,3)
// cc.addition(1,2)
// cc.addition(1,2,3,4) // ithe last chya class madhe addition function call kelya nantar ji balue yete tich final output chi value aste


//*******************************************//

//overloading= same class,same method,different signature(parameters)

function additionA(a, b, c, d) {
    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)

    if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
        console.log(a + b + c + d)
    }
    else if (a !== undefined && b !== undefined && c !== undefined) {
        console.log(a + b + c)
    }
    else if (a !== undefined && b !== undefined) {
        console.log(a + b)
    }
}

additionA(1, 2, 3, 4)
additionA(1, 2, 3)
additionA(1, 2)


class calA {
    additionA(a, b, c, d) {
        // console.log(a)
        // console.log(b)
        // console.log(c)

        if (a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
            console.log(a + b + c + d)
        }
        else if (a !== undefined && b !== undefined && c !== undefined) {
            console.log(a + b + c)
        }
        else if (a !== undefined && b !== undefined) {
            console.log(a + b)
        }
    }
}

let a = new calA()
a.additionA(1, 4)
a.additionA(1, 4, 3)
a.additionA(1, 4, 3, 3)
// overloading   ==> same class , same method name , different signature

class IndianBankA {

    depoist(greet) {
        console.log(' welcome to ' + greet)
    }

}

class SBIB extends IndianBank {

    depoist(greet) {
        console.log(' welcome to ' + greet + "SBI")
    }


}

let mn = new SBIB()
mn.depoist('Indian ')

// overloading --- same method  , same class ,differnt signature
// overiding - same method ,  same signature,different class
