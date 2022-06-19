

// button 

// selecting the element

let buttonA = document.querySelector('button')
let inputTextBox=document.querySelector('input')
let ulList = document.querySelector('ul')



buttonA.addEventListener('click',function(){
   let text = inputTextBox.value
   
   let newElement=document.createElement('li')// it created blank element <li></li>
   newElement.textContent=text // <li>kiwi</li>
   ulList.appendChild(newElement)
   inputTextBox.value= " "

})

// Important
// Javascript

// We can create element
//We can add element
//We can update element


//We can delete element


// Attribute
//We can create attribute
//We can add attribute
//We can update attribute
//We can delete element















