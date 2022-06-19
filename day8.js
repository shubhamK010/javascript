// old way
let age = [22,33,44,55,22]
// birthYear
let birthYear = []
for(let i = 0;i<age.length;i++){
    //console.log(i)
let br = 2022-age[i]
birthYear.push(br)

}
console.log(birthYear)

// map----> new way

let rrr = age.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2022-el
})
console.log(rrr)

let numbers = [1,2,3,4,5,6,7,8,9,10]
//[2,4,6,8,10,12,14,16,18,20]
let rtm = numbers.map(function(el,index,arr){
    return el*2
})
console.log(rtm)

// filter---------->old way

let h = [33,44,55,11,33,44,55,66,11,88,77]
let above30 = [] 

for(let i = 0; i<h.length;i++){
    if(h[i]>30){
        above30.push(h[i])
    }
}
console.log(above30)


// filter---------->new way

let hhh = h.filter(function(el,index,arr){
    return el>30
})
console.log(hhh)


// reduce-----------------> old way

let marks = [11,22,33,44,55]
let sum = 0

for(let i = 0; i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)


// reduce-------> new way

let rra = marks.reduce(function(acc,el,index,arr){
    return el+acc
},0)

console.log(rra)



//--------------------------------Practice--------------------------------------//

// map------->old way
//          0  1   2  3  4
let age1 = [22,23,44,55,22]
let birthYear1=[]
for(let i = 0;i<age.length;i++){
    let br1 = 2022-age[i]
    birthYear1.push(br1)
}
console.log(birthYear1)

// map--------->new way

let rrr1=age.map(function(el,index,arr){
   return 2022-el
})
  console.log(rrr1)


// map--------->new way

let numbers1 = [11,22,33,44,55,66]
let rtm1= numbers1.map(function(el,index,arr){
    return el*3
})
console.log(rtm1)


// filter -------->old way
//        0   1   2  3    4   5
let h1 =[133,120,140,170,220,278]

let above200 = []
for(let i=0; i<h1.length;i++){
    if(h1[i]>200){
        above200.push(h1[i])
    }
}

console.log(above200)


// filter-------->new way

let hhh1 = h1.filter(function(el,index,arr){
    return el>200
})
console.log(hhh1)



//reduce-------->old way
let marks1 = [44,22,11,66,88]
let sum1 = 0

for(let i=0;i<marks1.length;i++){
   sum1=sum+marks1[i]
}
console.log(sum1)

// reduce------> new way
//reduce--------returns single value

let red1 = marks1.reduce(function(acc,el,index,arr){
    return el+acc
},0)

console.log(red1)



// map------>old way
//           0  1 2  3   4
let age2 = [18,20,22,24,26]
let birthYear2 = []

for(let i =0;i<age.length;i++){
    let br2 = 2022-age[i]
    birthYear2.push(br2)
}
console.log(birthYear2)



// map--------->new way

let rrr2 = age.map(function(el,index,arr){
    return 2022-el
})
 console.log(rrr2)


// filter---------->old way

let hhhz= [120,230,430,768,409,999,333]
above300 = []
for(let i=0;i<hhhz.length;i++){
    if (hhhz [i]>300){
        above300.push (hhhz[i])
    }

} 
console.log(above300)

// filter-------->new way

let qqw = hhhz.filter(function(el,index,arr){
    return el>300
})
console.log(qqw)

// reduce----->old way

let qwq = [ 12,13,14,15,16,17,18]
let sum4 = 0 

for (let i = 0;i<qwq.length;i++){
    sum4 = sum+qwq[i]
}
console.log(sum4)


// reduce---------->new way

let rra4 = qwq.reduce(function(acc,el,index,arr){
    return el+acc
},0)
 console.log(rra4)

 let rra5 = qwq.reduce(function(acc,el,index,arr){
    return el+acc
},1)
console.log(rra5)

let rra6 = qwq.reduce(function(acc,el,index,arr){
    return el+acc
},2)
console.log(rra6)


// Birthyear-->map old way
//           0 1  2  3  4
let age4 = [17,22,36,44,89] 

let birthyear4 = []

for(let i = 0; i<age4.length; i++){
    let br5 =2022 - age4[i]
    birthyear4.push(br5)
}
    console.log(birthyear4)

//map----new way

let rrr4 = age4.map(function(el,index,arr){
    return 2022 - el
})
    console.log(rrr4)

// map -----old way
let numbers4 = [10,19,29,30,40,78,49,67]
numbers5 = []
for(let i = 0;i<numbers4.length;i++ ){
  let br6 = 2020 - numbers4[i]
  numbers5.push(br6)
}
  console.log(numbers5)














































