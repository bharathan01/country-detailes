function search(){
    countryName = country_name.value

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(cdata => cdata.json()).then(cdata => displayData(cdata))
}
function displayData(counteryData){
    cname = counteryData.name
    capital = counteryData[0].capital
    population = counteryData[0].population
    flag = counteryData[0].flag
    lan = counteryData[0].languages[0].name
    currency = counteryData[0].currencies[0].name
    nativeName = counteryData[0].nativeName

    resultData.innerHTML = `<div class="card" ">
    <img src="${flag}" class="card-img-top" alt="...">
    <ul class="list-group list-group-flush" >
      <li class="list-group-item">Country Name : ${cname}</li>
      <li class="list-group-item">Capital      : ${capital}</li>
      <li class="list-group-item">Native Name  : ${nativeName}</li>
      <li class="list-group-item">Language     : ${lan}</li>
      <li class="list-group-item">Population   : ${population}</li>
      <li class="list-group-item">Currency     : ${currency}</li>
    </ul>
  </div>`
}