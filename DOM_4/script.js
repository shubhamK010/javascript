let ulList=document.querySelector('ul')
let inputText=document.querySelector('input')
let buttonA=document.querySelector('#one')
let liList=document.querySelectorAll('li')

console.log(ulList)
console.log(inputText)
console.log(buttonA)


for(let i=0;i<liList.length;i++){
    createButton(liList[i])
}


buttonA.addEventListener('click',function(){
    let text=inputText.value
    let liList=document.createElement('li')   //<li></li>
    liList.textContent=text
    createButton(liList)
    ulList.appendChild(liList)
})

//function declaration
function createButton(li){
   let r= document.createElement('button')  // <button></button>
   r.textContent=('Remove')  // <button>Remove</button>
   r.classList="remove"  // <button class="remove"></button>
   li.appendChild(r)

   let u=document.createElement('button')  // <button></button>
   u.textContent=('Up')      // <button>Up</button>
   u.classList="up"          // <button class="up"></button>
   li.appendChild(u)


   let d=document.createElement('button') //<button></button>
   d.textContent=('Down') // <button>Down</button>
   d.classList="down"    // <button class="down"></button>
   li.appendChild(d)

}
   















