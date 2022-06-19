
//rest 

function multiplication(...mul){
    console.log(mul)
    let mulA=mul.reduce(function(acc,el){
        acc+el
    },0)
    return mulA
}

let mulB=multiplication(10,20,30,40,50,60,70,80,90)
console.log(mulB)

// 10,20,30,40,50
//comma separated values in one variable=====>called as rest operator



function filterValues(b,...bbb){
    let set=bbb.filter(function(el){
        return el>  b
    })

    return set
}
let aa=filterValues(11,22,33,44,55,66,77,88,99)
console.log(aa)

let bb = filterValues(40,11,22,33,44,55,66,77,88,99)
console.log(bb)

// jisse bhi jyada values chahiye array me us number ko 0index pe rakhlo,kyuki wo pehle element me jayega aur baki ke pure array me jayenge aur hum operation perform kar sakte hai
// pehla value jo hai wo condition wala value hai aur uske aage ke array me jane wale values hai
// means we can use rest operator to filter out specific values


// spread operator

let data =[12,14,15,26,39,68,70,69,66,83]

function add(a,e,i,o,u){
    console.log(a+e+i+o+u)

}
//sumfive(data[0],data[1],data[2],data[3],data[4]) // old way

// new way
 sumfive(...data)      // aisa karne pe values spread honge i.e. 'a' me jayega 12,'e' me 14,'i' me 15,'o' me 26,'u' me 39

 //comma separated values i.e.15,20,40,60,70=====> in array i.e.[15,20,40,60,70] =====> rest operation====>used in parameters   
//array i.e. [15,20,40,60,70]======> in comma separated values i.e.[15,20,40,60,70]====> spread opearation====> used in arguments



















































































