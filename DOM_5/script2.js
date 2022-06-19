
let inpuText = document.querySelector('input')
let ulList = document.querySelector('ul')
let addButton = document.querySelector('#one')
let liElement = document.querySelectorAll('li')

for (let i = 0; i < liElement.length; i++)(
    createButton(liElement[i])
)

addButton.addEventListener('click', function () {
    let text = inpuText.value
    let newElement = document.createElement('li') //<li></li>
    newElement.textContent = text
    createButton(newElement)
    ulList.appendChild(newElement)

})


ulList.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
        if (e.target.className == "remove") {

            let li = e.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)


        }

        if (e.target.className == "down") {
            let li = e.target.parentElement
            let ul = li.parentElement
            let nextLi=li.nextElementSibling
            ul.insertBefore(nextLi,li)
            


        }

        if (e.target.className = "up") {

            let li = e.target.parentElement
            let ul = li.parentElement
            let prevLi=li.previousElementSibling
            ul.insertBefore(li,prevLi)

        }
    }

})

// Javascript according to Sir=====>
// javascript is used to====>add,update,retrive,delete element
// javascript is used to====>add,update,retrive,delete value of attribute in element
//based on "userAction"

function createButton(li) {

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.className = "remove"
    li.appendChild(r)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.className = "down"
    li.appendChild(d)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.className = "up"
    li.appendChild(u)


}

















