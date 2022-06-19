
// for(let i = 0;i<5;i++){
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     if(i==5){
//         continue
//     }
// }

// loop --- we use loop because,---agar kisi chhej ko multiple times chalana hai aur wo same cheej hai to hum loop definite time ke liye or indefinite time ke liye use karte hai
// we have two type of loops--1)for 2)while 

for(let i=0; i<5;i++){
    console.log(i)
    console.log('hello')
}


for(let i=0; i<4;i++){
    if(i==1){
        break
    }
    console.log(i)
}


for(let i=0;i<5;i++){
    if(i==3){
        continue
    }
    console.log(i)

}

// initialisation outside loop

let  k= 1
for(;k<5;){
    console.log(k)
    k++
}


//*----------------------------------*//


// for--- for definite time

//while----til we dont get congition true
//         while ke samne wali condition jab tak true hoti hai tab tak uske aadar likhe hue statements execute hote hai



let j = 0

while (j<=10){
    console.log(j)
    j++
}

//print(5 to 0)

let s = 5
while(s>=0){
    console.log(s)
    s--
}

//break with while loop

let y = 0

while(y<=10){
    if(y==3){
        break
    }
    console.log(y)// 0//1//2
    y++
}

// continue with while loop

let z = 5

while(z>= 0){
    if(z==3){
        z--
        continue
    
    }
    console.log(z) // it will skip 3
    z--
}













