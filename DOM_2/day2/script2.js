console.log('hello')

//<p id="one" class="two" name ="three">para</p>


// find by tagName
let tagName = document.querySelector('p')
console.log(tagName)

//find by className

let className = document.querySelector('.two')
console.log(className)

//find by id

let idName = document.querySelector('#one')
console.log(idName)

// tagName[attribute="value"] ==> css selector .........find by css selector

let commonF = document.querySelector('p[name="three"]')
console.log(commonF)

//<h1 class = "four" id = "five" name="six">Vegetables</h1>


let a = document.querySelector('#five')
let b = document.querySelector('.four')
let c = document.querySelector('h1')
let d = document.querySelector('h1[name="six"]')

console.log(a)
console.log(b)
console.log(c)
console.log(d)


