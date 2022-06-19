let mapB=new Map([
    [10,"rollNo"],
    ["color","white"],
    [true,"isStudent"],
    [{a:"s",b:"k"},44]
])                       
console.log(mapB.size) 


for(let a of mapB.keys()){
    console.log(a)
}

// for(let a of mapB.values()){
//     console.log(a)cc11
// }

// for(let [key,val] of mapB.entries()){
//     console.log(key,val)
// }