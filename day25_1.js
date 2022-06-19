
// // for(let i=o;i<5;i++){
// //     console.log(i)   //0//1//2//3//4
    
// // }

// for(let i=0;i<10;i++){
//     if(i==5){
//         continue //0//1//2//3//4//6//7//8//9//10
//     }
// }

// loop-- we use loop because,---agar kisi cheej ko multiple times chalana hai aur wo same cheej hai to hum loop use karte hai
//loop definite and indefinite time ke liye use kar sakte hai

//we have two types of loops---1)for---for definite time
//                              2)while---indefinite time


for(let i =0;i<4;i++){
    if(i==1){
        break
    }
    console.log(i) // we get 0
}

for(let i=0;i<5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}

// initialisation outside loop

// let k=1
// for(;k<5;){
//     console.log(k)
//     k++
// }

//----------------//

// for---- definite time loop
// while----till we dont get condition true \
//         while ke samne wali condition jab tak true hoti hai tab tak uske andar likhe hue statements execute hote hai


let j=0

while(j<=10){
    console.log(j)
    j++

}

//print(10 to 0)

let s = 10
while (s>=0){
    console.log(s)
    s--
}
// break with while loop

let y=0

while(y<=10){
    if(y==3){
        break
    }
    console.log(y) 
    y++
}

// break with while loop

let z=0

while(z<=15){
    if(z==10){
        break
    }
    console.log(z)
    z++
}

// while with conmtinue loop
console.log('*************')
let d=0

while(d>=10){
    if(d==4){
        d--
        continue

    }
    console.log(d)
    d--
}