

let heading1= document.querySelector('h1')

heading1.addEventListener('click',function(){
    heading1.style.background =" yellow"
})


// class==> defined style.css

// there are no eyes to script so it cannot find text,so we have to run the code

//there are some methods to give eyes to script so that it can run code and find text

//<p id = "four" class = "five" name="nm">paraS</p>

// tagName
let paraByTagName =document.querySelector('p')

// Id
let paraById =document.querySelector('#four')

// class
let paraByClass =document.querySelector('.five')

// common formula  tagName[attribute='value']
let commonFormula = document.querySelector('p[class="five"]')

console.log("parabyTagName")
console.log("parabyId")
console.log("parabyClass")
console.log("CommonFormula")

// <h2 name ="nm" class = "newA" id="newB">Shubham</h2>

// tagname

let rr= document.querySelector('h2')
console.log(rr)

// class
 let ss = document.querySelector('.newA')
 console.log(ss)

// id

let tt = document.querySelector('#newB')
console.log(tt)

// common formula

let uu = document.querySelector('h2[name ="nm"]')
console.log(uu)

































