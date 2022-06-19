
let ulBrand =document.querySelector('ul')
let button1 =document.querySelector('#one')
let info1 = document.querySelector('input')


let liBrand= document.querySelectorAll('li')
for(let i=0;i<liBrand.length;i++){
    createButton(liBrand[i])

}

button1.addEventListener('click',function(){

    let info = info1.value
    let newBrand =document.createElement('li') //<li></li>
    newBrand.textContent = info //<li>Tata</li>
    
    createButton(newBrand)
    ulBrand.append(newBrand)

})

ulBrand.addEventListener('click',function(event){

    if(event.target.tagName==="BUTTON"){
        console.log(event.target.className)

        if(event.target.className==="remove"){

            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }

        if(event.target.className==="up"){

            let li = event.target.parentElement
            let ul = li.parentElement
            let prevSi =li.previousElementSibling
            ul.insertBefore(li,prevSi)
    
        }

        if(event.target.className==="down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let nextSi =li.nextElementSibling
            ul.insertBefore(nextSi,li)

        }
    }
})


function createButton(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" //<button>remove</button>
    remove.classList = "remove"// <button class = "remove">remove</button>
    li.append(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" //<button>up</button>
    up.classList = "up"// <button class = "up">up</button>
    li.append(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "down" //<button>down</button>
    down.classList = "down"// <button class = "down">down</button>
    li.append(down)

}



































