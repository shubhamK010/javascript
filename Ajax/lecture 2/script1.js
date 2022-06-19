
//front end api request==>data==>json format==>object==>retrive object==>html element


let container=document.querySelector('#container')

//here we are creating html element to display on webpage
function renderHTML(data){
    console.log(data)

    //hamare data mai hai==>id,email,first_name,last_name,avatar
    let html=`<div>
    
     <h1>firstName:${data.first_name}</h1>
     <h2>lastName:${data.last_name}</h2>
     <p>email:${data.email}</p>
     <h1>id:${data.id}</h1>
     <img src="${data.avatar}">

    
    </div>`
    container.insertAdjacentHTML('beforeEnd',html)

    
}



//api call by XHR request
function getData(){
    fetch('https://reqres.in/api/users?page=2')
    .then(function(response){
        return response.json()
    }).then(function(data){
        // console.log(data.data)   //data.data returns array

        data.data.forEach(element => {  //yaha data ka har ek element object hai..aur wo object hume renderHTML naam ke function ko send karna hai
            renderHTML(element)        // ye karne pe renderHTML me element bante jayenge aur container jo ki index1.html file me save kiya hai usme ek ek karke aate jayenge..aur ye sab kab hoga?..jab api ka response ayega


        
            
        });
    })
}
getData()