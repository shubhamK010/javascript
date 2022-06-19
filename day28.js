// humein function ko alag alag parameter pass karke dekhne hai
// usme hum pfunction ko array,baad me string,baad me object,baad me number pass karenge
//aur fir hum function ko function hi pass karnege
//aur return me bhi hum ye saari cheeje return  kara sakte hai
// means return me hum array,string,object,number and then function return kara sakte hai


//number as a parameter to function

function addition(x, y) {
    return x + y

}
let aa = addition(10, 20)
console.log(aa)

// string as a parameter to function
// we have vowels = a,e,i,o,u

function countVowels(word) {
    // let word = "shubham"
    let count = 0
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].toLowerCase()
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            count = count + 1
        }

    }

    return count
}

let totalAll = countVowels("shubham")
console.log(totalAll)

let totalAll2 = countVowels("pravin")
console.log(totalAll2)


//**********************************************************//
// we can update complete string but cant update single character or particular character
// so that we call it as string is immutable(i.e. cannot tbe changed)

let s = "pravin"
console.log(s[0])

s[0]= "k"
console.log(s)


// Memory - Adress cocept
//In primitive data type i.e.string= yahape alag memory&alag address banta hai,so that ek ko change karne se dusre kofarak nahi padta
//In Array & Object = yahape alag memory nahi banti only alag adress banta hai& old and new adress ek sath milke old memory ko point karte hai....ek ko update karne se dusra bhi update hota hai

let marks = [1,2,10]
function sum(arr){
    //let arr = marks====>[1,2,10]
    arr[0]=25
    console.log(arr)//[25,2,10]
}
console.log(marks) // [1,2,10]
sum(marks)
console.log(marks) //[25,2,10]



let a = [31,41,51]
let b = a
b[0] = 88  
a[1]= 77

console.log(a) //[88,77,51]
console.log(b)// [88,77,51]


let d = [10,20,30,40]
function sumAll(arr){
   let nm= arr.reduce(function(acc,el){
        return el+acc

    },0)
    return nm    
}
let ggg= sumAll(d)
    console.log(ggg)

// object

let student = {

    fullName: "shubham",
    age:18
}

let student2=student
student.fullName = "pravin shelar"
console.log(student2)
console.log(student)

// object as a parameter to another function

// let student3 = {
//     fullName:" tushar gahadage",
//     age:15
// }
// function print(id) {
//     console.log(id)
//     id.age=100
// }
// console.log(student3)
// print(id)(student3)
// console.log(student3)



let student4 = {

    fullName: "raju das",
    age:30,
    skils:["cooking","dancing","singing"]
}
function printAllinfo(student4){

    for(let key in student4){
        console.log(key,student4[key])

    }


}
printAllinfo(student4)
























