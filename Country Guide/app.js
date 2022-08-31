let btn = document.querySelector("#btn");
let item = document.querySelector("#item");
let result = document.querySelector("#res");

btn.addEventListener("click", async () => {
    let countryName = item.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    let res = await fetch(finalURL);
    let data = await res.json();
    result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
    <h4>Capital:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    
    <div class="wrapper">
    <h4>Continent:</h4>
    <span>${data[0].continents[0]}</span>
    </div>
    
    <div class="wrapper">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
    </div>
    
    <div class="wrapper">
    <h4>Currency:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
    </div>
    
    <div class="wrapper">
    <h4>Common Languages:</h4>
    <span>${Object.values(data[0].
        languages)
            .toString()
            .split(",")
            .join(",")}
        </span>
    </div>`
})