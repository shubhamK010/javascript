//selectores

let count=document.querySelector('#container')



//html render 

//we have to get ====>continent,country,flag,languages


function getLanguages(obj){
    return Object.values(obj).join(' , ')
}





function renderCountry(country){

    let html= `

    <div class= 'countryC'>
        <h1>${country.name.common}</h1>
        <p>${getLanguages(country.languages)}</p>
        
        <p>${country.continents[0]}</p>
        <img src="${country.flags.png}"/>
    
    
     
    </div>
    
    `
    count.insertAdjacentHTML('beforeend',html)

}





//getCountries


function getNeighbourCountry(countryCode){
    fetch(`https://restcountries.com/v3.1/name/${countryCode}`)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).then(function(rs){
        // console.log(rs[rs.length-1])
        country =rs[rs.length-1]
        renderCountry(country)
        return country
        
        

    })

}




function getCountry(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(response){
        console.log(response)
        return response.json()
    }).then(function(rs){
        // console.log(rs[rs.length-1])
        country =rs[rs.length-1]
        renderCountry(country)
        return country
        

        // console.log(country)

        //it is giving capital
        // console.log(country.capital[0])
        // console.log(country.languages)
        // console.log(country.currencies)
        // console.log(country.continents[0])
        // console.log(country.flags)
    }).then(function(country){
        console.log(country)

        let border=country.borders[country.borders.length-1]
        // console.log(border)
        getNeighbourCountry(border)


    })
}
getCountry('India')

//getNeighbourCountries



// how to get currencies for PAK?