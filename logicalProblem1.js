let candidates=[
    {
        fullName:"shubham kamble",
        age:18,
        subjects:["marathi","english","hindi","sanskrit","agri"],
        city:"pune",
        family:{
            father:"pandurang",
            mother:"anuradha",
            sister:"priya,sakshi"
        }
    },
    {
        fullName:"anshu kasabe",
        age:10,
        subjects:["english","games","sports"],
        city:"Osmnabad",
        family:{
            father:"kishor",
            mother:"rani",
            brother:"kanha"
        }

    },
    {
        fullName:"tushar ghadage",
        age:24,
        subjects:["organic","inorganic","psychology"],
        city:"indapur",
        family:{
            father:"mahadev",
            mother:"parvati",
            brother:"pawya"
        }
        

    },
    {
        fullName:"pravin shelar",
        age:23,
        subjects:["analytical","IT","agri"],
        city:"indapur",
        family:{
            father:"vijaykumar",
            mother:"mangla",
            brother:"bapurao"
        }

    }
]
    
  

// print the fullname and city

//for one single user
console.log(candidates[0].fullName,candidates[0].city)

// for all users==>print the fullname and city
//hum ye for loop se nahi to arrauy ke method se achieve kar sakte


candidates.forEach(function(el){
    console.log(el.fullName,el.city)
})


//fullname with number of skills

candidates.forEach(function(el){
    console.log(el.fullName,el.subjects.length)
})


// users belong to indapur==>by using forEach

candidates.forEach(function(el){
    if(el.city=="indapur"){
        console.log(el.fullName)
    }
})

// users belong to indapur==>by using filter

candidates.filter(function(el){
    return el.city=="indapur"  //it returns array having objects of city indapur  [{},{}]
    
}).forEach(function(el){
    console.log(el.fullName)
})


//print the average of age

console.log(candidates.reduce(function(acc,el){
    return acc+el.age

},0)/candidates.length)

//city=indapur||pune ||subject=agri subject and should belong to indapur or pune city

 candidates.filter(function(el){
     return el.city=="pune" || el.city=="indapur"  && el.subjects.includes("agri")
 }).forEach(function(el){
     console.log(el.fullName)
 })

//name of user with count of family members

candidates.forEach(function(el){
    let count=0
    for(let key in el.family){
        count=count+1

    }
    console.log(el.fullName+" "+count)
})


// user having highest age
// method 1
// let max=0
// let user;
// candidates.forEach(function(el){
//     if(el.age>max){
//         max=el.age
//         user=el.fullName
//     }
// })
// console.log(user)

// method 2

let nm=candidates.map(function(el){
    return el.age
}).sort()
let maxA=nm[nm.length-1]

console.log(candidates.find(function(el){
    return el.age==maxA
}).fullName)


//name of user with count of family members count
console.log('****************')
let KeyCount=candidates.forEach(function(el){
    console.log(el.fullName + " " + " The Family Member Count" + " " + Object.keys(el.family).length)
})

//Q. Find the minimum distance between two numbers like array[2,4,5,6,7,2,5,6,2,6]
// find minimum distance for value(2,6)

function minDist(arr, n, x, y)
{
    var i, j;
    var min_dist = Number.MAX_VALUE;
     
    for(i = 0; i < n; i++)
    {
        for(j = i + 1; j < n; j++)
        {
            if ((x == arr[i] && y == arr[j] ||
                 y == arr[i] && x == arr[j]) &&
                 min_dist > Math.abs(i - j))
                min_dist = Math.abs(i - j);
        }
    }
    if(min_dist>n)
      {
        return -1;
      }
    return min_dist;
}
 

let arr = [ 3, 5, 4, 2, 6, 5,
            6, 6, 5, 4, 8, 3 ];
let n = arr.length;
let x = 3;
let y = 6;
 
console.log("Minimum distance between is ",minDist(arr, n, x, y));


//Q.separate a string from array

let nameA= [ 'shubham', ' pravin', 1, 2]
let rrh=nameA.filter(function(el){
    return typeof el== 'number'
})
console.log(rrh)


// seprate a number from array
let rk= nameA.filter(function(el){
    return typeof el== 'string'
})
console.log(rk)

//////////////////////////////////////////////////////////////////////




