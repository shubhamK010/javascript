// string

let a = 'pune'
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])


for(let i=0;i<a.length;i++){
    console.log(a[i])
}

//property of strings---length

for(let i=a.length;i>=0;i--){
    console.log(a[i])
}

// methods of string

let aa= ' latur '
//upperCase

let b=aa.toUpperCase()
console.log(aa)
console.log(b)


//to lowerCase

let c = aa.toLowerCase()
console.log(c)
//trimStart()

let d = aa.trimStart()
console.log(d)




//trimEnd()

let e=aa.trimEnd()
console.log(e)


//trim()

let f=aa.trim()
console.log(f)

// includes

let h=aa.includes( 'r')
console.log(h)

let hh=aa.includes( 'R')
console.log(hh)

// indexOf()

let g=aa.indexOf('l')
console.log(g)

let gg = aa.indexOf('p')
console.log(gg)

// split()  ---- returns array


let j=aa.split('')
console.log(j)

//join()   returns string

let k=j.join('-')
console.log(k)

//slice()

let l=aa.slice(0,3)
console.log(l)


let ll=aa.slice(3,1)
console.log(ll)

let lll = aa.slice(-4,-1)
console.log(lll)

let llll = aa.slice(-1,-4)
console.log(llll)



// array

let array = [10,20,30,40,50,"sai"]

console.log(array[0])

console.log(array[5])

console.log(array[2])


for(let i=0;i<array.length;i++){
    console.log(array[i])
    console.log(i)
}


for(let i=array.length;i>=0;i--){
    console.log(array[i])
}



// methods of array

// push

let m=array.push('mess')
console.log(m)

//pop

let n = array.pop()
console.log(n)

//unshift
let o = array.unshift('hotel')
console.log(o)
console.log(array)


//shift

let p=array.shift()
console.log(p)











//indexOf

let q=array.indexOf('sai')
console.log(q)

let qq= array.indexOf('z')
console.log(qq)

//flat

let array2=[[12,13,14],[15,16,17]]

let t=array2.flat()
console.log(t)






//find()

let find=[40,20,65,98,48,36]
let u=find.find(function(el,index,arr){
    return el>20
})
console.log(u)

//findIndex()

let v=find.findIndex(function(el,index,arr){
    return el>40
})
console.log(v)

// concat

let join1=[10,20,30]
let join2=[40,50,60]

let w=join1.concat(join2)
console.log(w)

// join

let data=['shubham','kamble','82371094965']

let x=data.join('@')
console.log(x)


// four important methods

// map
//old way

let birthYear=[2000,1989,1998,1996,1999]
let age=[]
for (let i=0;i<birthYear.length;i++){
    let y=2022-birthYear[i]
    age.push(y)   
}
console.log(age)

// new way

let z=birthYear.map(function(el,index,arr){
    return 2022-el
})
console.log(z)

// filter -----------filter the element based on some conditions
//return=====filtered elements
//map =====map works with every element
// return=== array



//filter ====old way

let filter=[14,15,16,78,96,52,32]
let above50=[]

for(let i=0;i<filter.length;i++){
    if(filter[i]>50){
        above50.push(filter[i])
        
    }
}
console.log(above50)

// filter====new way

let zz=filter.filter(function(el,index,arr){
    return el>50
})
console.log(zz)


// reduce -----works on everyelement and returns single value
//old way

let marks=[36,40,40,50,60,80,98]
let sum = 0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)


// new way

let yy=marks.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(yy)


// forEach========ye methoid kuch  return anhi karti sirf priont karti hai


let names=["pravin","tushar","nikita","ankita"]

names.forEach(function(el,index,arr){
    console.log('welcome           '      +  el)
})

//sum


let some=[1,2,3,45,62,78,150]

let pp=some.some(function(el,index,arr){
    return el>50
})
console.log(pp)
//every

let pp2=some.every(function(el,index,arr){
    return el <= 150
})
console.log(pp2)
//splice

let splice=[10,20,30,40,50,60,70,80,90]

let oo=splice.splice(0,3,12,15)
console.log(oo)
console.log(splice)















