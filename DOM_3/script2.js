// program 

//1) select the elemnt
//2)create the li element with text in input
//3)based on user action add element to the list


let ul=document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton= document.querySelector('button')

addButton.addEventListener('click',function(){
   let liText = inputText.value
   
   let  newLi= document.createElement('li')  //  <li></li>
   newLi.textContent = liText  // <li>mango</</mango>
   ul.appendChild(newLi)
   inputText.value = " "
 
})















