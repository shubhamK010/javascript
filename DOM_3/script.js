//Program 1
// sabse pehle mujhe li element nikalne honge...wo document queryselector se hoga 

let subjectList=document.querySelectorAll('li')
let addButton = document.querySelector('button')
let ulList = document.querySelector('ul')
console.log(subjectList)  //[li,li,li]  // every li element is "object"..but they are object of "html element".
console.log(addButton)



//Program 1
// addButton.addEventListener('click',function(){
//     for(let i=0;i<subjectList.length;i++){
//         //console.log(i)            // here we get all index numbers
//         //console.log(subjectList[i].textcontent)  // here we get all elemts //string,array ke upar jaise length naam ki property hai waise hi li element ke upar textContent naam ki property hai..jo ki html elemnt ka text return karti hai
//         subjectList[i].textContent= "Zoology"
//     }
// })



// node list = li elemnts store karne wali list
// node list hoti hai wop array ke similar hoti hai
//means wo array jaise hi element index se store karti hai
//matlab aap node list pe bhi loop kar sakte h

//<h2 class="ab" id="nm" name="pyq">Subjects</h2>


// let student={

//     firstName:"shubham",
//     lastName:"kamble"

// }

// console.log(student.lastName)  //retrive
// student.firstName=" pravin "  // update
// student.lang="marathi"        // add
// delete student.lang           //delete


// What we can do with html element using Javascript ?
// can make or create html element,can retrive it,can update it,can delete it

// What we can do with attribute using Javascripy?
// can make or create  attribute element,can retrive it,can update it,can remove it
// but this is on user action==> clcik,dClick,mouseOver,mouseOut,load


// Program 2

subjectList=document.querySelectorAll('li')
addButton = document.querySelector('button')
console.log(subjectList)  //[li,li,li]  // every li element is "object"..but they are object of "html element".

// addButton.addEventListener('click',function(){
//     for(let i=0;i<subjectList.length;i++){
//         subjectList[i].style.color = "blue"
//         subjectList[i].style.backgroundColor = "yellow"
    
    
//     }


// })

ulList.addEventListener('mouseover',function(){
    for(let i=0;i<subjectList.length;i++){
        subjectList[i].style.color = "blue"
       // subjectList[i].style.backgroundColor = "yellow"
    
    
    }


})

ulList.addEventListener('mouseout',function(){
    for(let i=0;i<subjectList.length;i++){
        subjectList[i].style.color = "black"
       // subjectList[i].style.backgroundColor = "yellow"
    
    
    }


})




// let candidate ={

//     parents:{
//         father:"pravin shelar",
//         mother:"katrina shelar",
//         lastName: "ghadage"
//     }

// }

// candidate.perents.lastName = "shelar"




















