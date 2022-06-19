

/*<h1 id="one" class="two" name="sk">Heading</h1>
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>


    </ul>*/

// document.querySelector('#one')  // select by id
// document.querySelector('.Two')  // select by class
// document.querySelector('h1[name="sk"]')  // select by common formula
// document.querySelector('h1')  // select by tagname

// document.querySelectorAll('li')  // to select node list

//element.click()    // jis  element pe maine click kiya wo select hona chahiye
//so that add eventlistner body pe lagao


let body=document.querySelector('body')
console.log(body)

body.addEventListener('click',function(e){

    //definition of js,according to sir==>
    //Everything in js is object
    //object has properties and methods

    console.log(e.target)
    console.log(e.target.tagName)
    console.log(e.target.className)
    

    










})













