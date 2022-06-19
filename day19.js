let candidates = [
    {
        fullName:"shubham",
        age:30,
        subjects: ["polity","history","science","geography","current affairs"],
        exam : "written"

    },
{
        fullName: "vaibhav",
        age:18,
        subjects:["economics","world history","polity","science"],
        exam: "objective"
},
{
    fullName: "krishna",
    age:26 ,
    subjects:["world history","geography","anthropology"],
    exam: "objective"
}
]

for(let i=0;i<candidates.length;i++){
    console.log(candidates[i])
}

for(let i=0;i<candidates.length;i++){
    console.log(candidates[i].fullName,candidates[i].subjects.length)
}

let abab = candidates.find(function(el){
    return el.fullName.startsWith('v')
})

console.log(abab)


// sum of average

let vx = candidates.reduce(function(acc,el){
    return acc+el.age
},0)

console.log(vx/candidates.length)

// add subject

candidates.forEach(function(el){
    el.subjects.push("zoology")
})
console.log(candidates)


// candidates with polity subject

let kkk = candidates.filter(function(el){
    return el.subjects.includes('polity')
})
kkk.forEach(function(el){
    console.log(el.fullName)
})

let mmm = candidates.filter(function(el){
    return el.subjects.indexOf("polity")>=0
})

mmm.forEach(function(el){
    console.log(el.fullName)
})

// age greater than 25 and skill is geography

let bbb = candidates.filter(function(el){
    return el.exam.includes("objective") && el.age>25
})

console.log(bbb)

//*********************Practice********************//

let players =[

{
    fullName: "dhoni",
    age:40,
    skills: ["batsman","wicketkeeper","captain"],
    team: "chennai"

},
{
    fullName:"tendulkar",
    age:48,
    skills:["batsman","bowler"],
    team: "mumbai"

},
{
    fullName:"kohli",
    age:33,
    skills:["batsman","bowler","wicketkeeper"],
    team: "bengalore" 

},
{
    fullName: "rohit",
    age: 34,
    skills : ["batsman","captain"],
    team: "mumbai"
}
]

for(let i=0;i<players.length;i++){
    console.log(players[i])
}

for(let i=0;i<players.length;i++){
    console.log(players[i].fullName,players[i].skills.length)
}

let sa = players.find(function(el){
    return el.fullName.startsWith('t')
})

console.log(sa)

let sa2 = players.filter(function(el){
    return el.skills.includes("captain")
})

console.log(sa2)


// average of sum

let sa3 = players.reduce(function(acc,el){
    return acc+el.age
},0)
console.log(sa3/players.length)

// average of substraction 

let sa4 = players.reduce(function(acc,el){
    return el.age-acc
},0)
console.log(sa4/players.length)

// remove last skill

//players.forEach(function(el){
//    el.skills.pop()
//})

//console.log(players)

// remove first skill

//players.forEach(function(el){
 //   el.skills.shift()
//})
//console.log(players)

console.log(players)


// players with captain skill

let sa5 = players.filter(function(el){
    return el.skills.includes("captain")
    
})

sa5.forEach(function(el){
    console.log(el.fullName)
})
//---------------------------------//

let sa6 = players.filter(function(el){
    return el.skills.indexOf("wicketkeeper")>=0
})

sa6.forEach(function(el){
    console.log(el.fullName)
})


console.log('---------------')
// age greater than 35 and team is chennai






let aabb = players.filter(function(el){
    return el.team === "chennai" && el.age>35
})

console.log(aabb)

// other method

let aabb2 = players.filter(function(el){
    return el.team.includes("chennai") && el.age>35
})

console.log(aabb2)

console.log('----------')

// other method

let bbyy = players.forEach (function(el){
    if(el.team=== "chennai" && el.age>=40)
    console.log(el.fullName)
})

console.log(bbyy)

// we know that forEach() method do not return value so that we can't store and we can't print
// so that forEach() method  gives output as undefined

















































