// object

let person={
    fullName:"ankita",
    lastName:"dhavan",
    rollNo:12

}

console.log(person.fullName)
person.fullName="nikita"
console.log(person)
person.city="latur"
console.log(person)
delete person.rollNo
console.log(person)


//loop on object=======vvvvimp

for(let key in person){
    console.log(key,person[key])
}


for(let key in person){
    console.log(key)
}

for(let key in person){
    console.log(person[key])
}

// for
//while
//switchCase
//break
//continue

// while

//initialisation
//while(condition check)
//i++

let i=0
while(i<20){
    console.log(i)
    i++

}


// for odd 


let j=1
while (j<=20){
    console.log(j)
    j+=2
}


// for even
// while is used for infinite loop
// for is used for floop

let k=2
while(k<=20){
    console.log(k)
    k+=2
}

// break


let l=1
while (l<10){
    if(l==5){
        break

    }
    console.log(l)
    l++
}

// for sobat brerak

for(let m=0;m<10;m++){
    
    if(m==6){
        
        break
    }
    console.log(m)
}

// for(let i=0; i<4;i++){
//     if(i==1){
//         break
//     }
//     console.log(i)
// }



// while loop

let a=0
while (a<10){
    if(a==4){
        a++
        continue
    }
    console.log(a)
    a++
}

// for loop sobat continue

for(let b=0;b<10;b++){
    if(b==2){
        continue
    }
    console.log(b)
}


// switch case

let city="Jaipur"
switch (city){
    case"pune":
    case"latur":
    console.log("MH")
    case"Delhi":
    console.log("Delhi")
    break
    case"Jaipur":
    console.log('rajasthan')
    case"GandhiNagar":
    console.log("Gujrat")
    default:
        console.log("No City")
}





































