// structure and destructure

let info =[11,22,33,44]
console.log(info[0])
console.log(info[2])

let w=(info[0])
let x=(info[1])
let y=(info[2])
let z=(info[3])

console.log(w)
console.log(x)
console.log(y)
console.log(z)

// hume ye info[0] aisa baar baar nahi likhna hai iske liye hum usko destructure karenge
//iska matlab ek code se value store karenge aur usko hi call karenge

info=[11,22,33,44]
let [aa,bb,cc,dd ] = info

console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

// now we are destructuring array

//             0         1         2         3
let names =["shubham","pravin","tuhshar","bapurao"]

let [aaa,bbb] = names  // yaha aaa me jayega shubham & bbb me jayega pravin

console.log(aaa)
console.log(bbb)

// now we are destructuring object

// object

let student={

    firstName:"shubham",
    lastName:"kamble",
    age:14
}


let {firstName,lastName,age}= student

// console.log(firstName)
// console.log(lastName)
// console.log(age)

// but hume property ke naam hi variable ke naam nahi rakhne hai

let {firstName:fn,lastName:ln,age:ag}= student

console.log(fn)
console.log(ln)
console.log(ag)

/****************************************/

let data={

    firstName1:"pravin",
    lastName1:"shelar",
    subjects:["analytical","physical"]

}
let{firstName1:fna,lastName1:lna,subjects:[aaaa,bbbb]}= data

console.log(aaaa)
console.log(bbbb)
console.log(fna)
console.log(lna)



let gg= [["osmanabad","tuljapur"],["barshi","paranda"]]

let [[m,n],[o,p]]=gg

console.log(m)
console.log(n)
console.log(o)
console.log(p)



let state ={
    firstUser:{
        firstName: "m",
        lastName:  "n"

    },
    secondUser:{ 
        firstName: "o",
        lastName:  "p"

    }
}

let{firstUser:{firstName:f1,lastName:l1},secondUser:{firstName:f2,lastName:l2}}= state

console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)


let subjects =[

    { 
        name: "history",
        source: "book",
        available: "printout"    
    },
    {
        name: "anthropology",
        source: "internet",
        available: "notes"
    }
]  

let [{name:n1,source:s1,available:a1},{name:n2,source:s2,available:a2}]= subjects

console.log(n1)
console.log(s1)
console.log(a1)
console.log(n2)
console.log(s2)
console.log(a2)

//spread operator and rest operator

// comma separated values ko humne array me convert kiya
//jiske wajah se us array pe operation karna easy ho gaya


function add(...cal){

    //console.log(cal)

    let total=cal.reduce(function(acc,el){
        return acc+el

    },0)

    return total


}
// totalA=total
let totalA =add(10,20,30,40,50,60,70,80,90,100)
console.log(totalA)


// 10,20,30,40,50,60,70,80,90,100===>[10,20,30,40,50,60,70,80,90,100]



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































 