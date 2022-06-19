let student = {
    fullName: "shubham",
    age: 18,
    skills: ["history", "geography"],
    city: "pune"
}

// retrive
console.log(student.fullName)
console.log(student['fullName'])

// update 
person.age = 18
person['age'] = 30

// add 
person.lang = "Anthropology"
person['language'] = "Anthropology"

// add skill to array 
person.skills.push('swimming')
person['skills'].push('swimming')

// delete property
delete person.lang
delete person['city']
//*********************************//
candidate = {
    fullName: "pravin",
    age: 12,
    skills: ["dancing", "singing"],
    city: "mumbai"
}
for (let key in person) {
    console.log(key, person[key])
}

//*********************************//

let students = [
    {
        fullName: "chinmay deshpande",
        city: "pune",
        skills: ["html", "css", "javscript"]
    }
    ,
    {
        fullName: "poorva vyas",
        city: "ujjain",
        skills: ["html", "python", "javscript3", 'html5']
    }
    ,
    {
        fullName: "sarika pansare",
        city: "jaipur",
        skills: ["html5", "css3"]
    },
    {
        fullName: "vikas gupta",
        city: "ujjain",
        skills: ["html5", "css3"]
    }

]
// probelem 1 change city to nagpur for chinmay

console.log(students[0])
students[0].city = "nagpur"
students[0]['city'] = "nagpur"

//display number of skills for all users

for(let i = 0 ; i < students.length ; i++){
    console.log(students[i].fullName+":"+students[i].skills.length)
}

// forEach 

students.forEach(function(el){
    console.log(el.fullName+":"+el.skills.length)
})

// Name of person belong to city ujjain

students.forEach(function(el){
    if(el.city == "ujjain"){
        console.log(el.fullName)
    }
})

let cityUjjainArray = students.filter(function(el){
    return el.city === "ujjain"
})

cityUjjainArray.forEach(function(el){
    console.log(el.fullName)
})

// person belongs to ujjain and knows python

let rrr = students.filter(function(el){
    return el.city === "ujjain" && el.skills.includes('python')
})

rrr.forEach(function(el){
    console.log(el.fullName)
})