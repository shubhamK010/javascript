       
// valuce selection by tagName
let liList =document.querySelectorAll('li')


let button1 = document.querySelector('button')

let ulList = document.querySelector('ul')


// change color to blue on click
// button1.addEventListener('click',function(){

//      for(let i=0;i<liList.length;i++){

//         liList[i].style.color = " blue "


//      }  


//})


// change to uppercase on click

// button1.addEventListener('click',function(){
//     for(let i=0;i<liList.length;i++){

//         liList[i].textContent = liList[i].textContent.toUpperCase()




//     }
// })

// button1.addEventListener('click',function(){
//     for(let i=0;i<liList.length;i++){

//         liList[i].textContent = liList[i].textContent.toLowerCase()
        



//     }
// })



ulList.addEventListener('mouseover',function(){
    for(let i=0;i<liList.length;i++){

        liList[i].textContent = liList[i].textContent.toUpperCase()
        



    }
})

ulList.addEventListener('mouseout',function(){
    for(let i=0;i<liList.length;i++){

        liList[i].textContent = liList[i].textContent.toLowerCase()
        



    }
})















// Program One Info 2

//for(let i=0;i<liList.length;i++){
    //console.log( liList[i].textContent) // here value is retirved,so we get elements in object
    
    // liList[i].textContent = "Grapes"  // here value is updated and every element is changed in Grapes
    // liList[i].style.color ="red"

    // liList[i].style.background= "yellow"
    // liList[i].style.width = "300px"
    // liList[i].style.height = "300px"




//}













// program one
//console.log(liList)

// Node list is very similar to array





//person.age=34 ====> for value update

//person.lang = "marathi"====> for value addition

// console.log(person.fullName)=====>for value retrive

//delete.person.fullName======>for valude delete


// let person = {

//     parent:{
//         father:"shridhar",
//         mother:"madhura"

        
//     }
// }

// person.parent.mother ="madhura s"

































