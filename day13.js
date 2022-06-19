// Important Programmes

// Program 1
//            0     1   2    3  
 let arr =[1999,1998,2000,2001]
 let ages = []

 for(let i = 0;i<arr.length;i++){
     let ag = 2022 - arr[i]
     ages.push(ag)
 }
   console.log(ages)

   // Program 2
//             0   1  2 3  4   5
   let arr2 = [33,44,55,66,77,88]
   let above50 = []
   console.log(arr2[0])
   console.log('------------------')

   for(let i = 0; i<arr2.length; i++){
       //console.log(arr2[i])
       if(arr2[i]>50){
           above50.push(arr2[i])
       }
   }
   console.log(above50)



   //Program 3

//             0  1  2   3
   let total =[11,22,33,44]
   let sum = 0 
   for(let i = 0;i<total.length;i++){
       sum = sum +total[i]
       //0+11======>11
       //11+22=====>33
       //33+33=====>66
       //66+44======>110
   }
   console.log(sum)


   //Program 4

   let city = ["pune","mumbai","nashik","nagpur"]
   for(let i = 0;i<city.length;i++){
       console.log("Welcome to "+ city[i])
   }



//*...........................................*//

// function declaration

function add(x,y){
    console.log(x+y)

}
add(12,13)


//let add2 = function(x,y){
  //  console.log(x+y)
//}
add(12,13)


//let x = 10 
//console.log(add2)

function addition2(fn){
    // let fn = function(x,y){
        // console.log(x+y)
//    }
    fn(12,13)
}

//additiion2(add2)


//add2(11,22)




let age21 =[ 23,24,30,35]
let ageN=[]

for(let i=0;i<age21.length;i++){
    let age31 = 2022 - age21[i]
    //console.log(age31)
    ageN.push(age31)
}

console.log(ageN)



