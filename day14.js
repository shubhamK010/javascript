//Program One

let age = [11,22,33,44,55]
let birthYear=[]
for(let i=0;i<age.length;i++){
    //console.log(2022-age[i])

    let year = 2022 -age[i]
    birthYear.push(year)
}
console.log(birthYear)

// map 

let rrr = age.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2022-el
})
console.log(rrr)

let arr = [1,2,3,4,5,6,7,8,9,10]
//[2,4,6,8,10,12,14,16,18,20]

let iii = arr.map(function(el,index,arr){
    return el*2 
})
console.log(iii)

//Program Two = Filter(old Way)

let gg =[11,33,44,22,33,44,55,66,88]
let above50=[]

for(let i=0;i<gg.length;i++){
    if(gg[i]>50){
        above50.push(gg[i])
    }
}
console.log(above50)

// Filter(New Way)

let ttt = gg.filter(function(el,index,arr){
    return el>50
})
console.log(ttt)


//Program Three
// reduce(old way)


let ggA = [2,3,4]
let total = 0

for(let i=0;i<ggA.length;i++){
    total = total+ggA[i]
//  0+2=====>2
//  2+3=====>5
//  5+4=====>9
}
console.log(total)

// reduce(new way)

let eee = ggA.reduce(function(acc,el,index,arr){
    return acc+el 
},0)
console.log(eee)


//*********************************Practice*******************************//
// age
let aa = [12,13,14,15,16]
let birthYear1 =[]

for(let i=0;i<aa.length;i++){
    let year1= 2022-aa[i]
    birthYear1.push(year1)
}
console.log(birthYear1)

//map

let bb = aa.map(function(el,index,arr){
    console.log(el,index,arr)
    return 2022-el
})
console.log(bb)

//filter(old way)
//         0 1   2  3  4  5  6  7
let cc = [10,20,30,40,50,60,70,80]
let dd=[]

for(let i=0;i<cc.length;i++){
   if(cc[i]>50){
       dd.push(cc[i])
   }
}
console.log(dd)

//filter(old way)

let ff = [12,13,14,15,16,17,18]
let gg2 =[]

for(let i=0;i<ff.length;i++){
    if(ff[i]<15){
        gg2.push(ff[i])
    }
}
console.log(gg2)

// filter(new way)

let hhh = ff.filter(function(el,index,arr){
    return el<15
})
console.log(hhh)


// reduce(old way)

let marks = [20,40,60,70,80]
let total2 = 0

for(let i=0;i<marks.length;i++){
    total2 = total2+marks[i]
}
console.log(total2)


// reduce (new way)

let rrr2 = marks.reduce(function(acc,el,index,arr){
        return acc+el
},0)
console.log(rrr2)

// reduce(new way with new problem)

let abc = [1,2,3,4,5,6,7,8,9]

let xyz = abc.reduce(function(acc,el,index,arr){
        return acc+el
},0)

console.log(xyz)

// map(old way)
//          0   1  2  3  4  5
let age3 = [12,17,40,68,49,10]
let birthYear5=[]

for(let i=0;i<age3.length;i++){
    let br5 = 2022 - age3[i]
    birthYear5.push(br5)

}
console.log(birthYear5)

// map(new way)

let aabb = age3.map(function(el,index,arr){
    return 2022-el
})
console.log(aabb)

// filter(old way)

let aabb2 = [879,46,3678,900,224,643]
let xyz2 =[]

for(let i=0;i<aabb2.length;i++){
    if(aabb2[i]>300){
        xyz2.push(aabb2[i])
    }

}
console.log(xyz2)

// filer(new way)

let bbaa = aabb2.filter(function(el,index,arr){
    return el>300
})
console.log(bbaa)

// reduce(old way)
//            0  1  2   3  4  5  6  7  8
let marks6 = [90,80,70,60,50,40,30,20,10]
let sum7 = 0

for(let i=0;i<marks6.length;i++){
     sum7 = sum7 + marks6[i]

}
console.log(sum7)


// reduce(new way)

let xxyy = marks6.reduce(function(acc,el,index,arr){
         return acc+el
},0)

console.log(xxyy)














