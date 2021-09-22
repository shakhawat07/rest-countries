const loadCountries = () => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR1vM1wY4brSoRKip6Vvi-3HGO5XtE5xNAots1DXksk-RN7C-DDGQzV4cds')
        .then((res) => res.json())
        .then((data) => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
}
const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <h4>Capital: ${country.capital}</h4>
            <img src="${country.flag}">
        </div>
    `
}

