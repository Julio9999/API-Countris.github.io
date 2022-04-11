import getData from "./dom/getData.js";
import select from "./dom/select.js";
import changeTheme from "./dom/dark-mode.js";
import addCountries from "./dom/addData.js";
import addCountry  from "./dom/addCountry.js";
const d = document;
let json = '';

d.addEventListener('click', async(e)=>{
    
    if(e.target.matches('.select-list__option')){

        json = await getData(`https://restcountries.com/v3.1/region/${e.target.dataset.name}`);
        addCountries('template',json, 'country-container');
    }else if(e.target.matches('.input-group__icon')){
        let name = d.querySelector('.input-group__input').value;
        json = await getData(`https://restcountries.com/v3.1/name/${name}`);
        addCountries('template',json, 'country-container');
        
    }else if(e.target.matches('.country *')){

        addCountry('.container', e.target.parentElement);
    }
    
})


d.addEventListener('DOMContentLoaded', (e)=>{
    select('.select-selected', '.select-list', 'is-active', '.select-selected__arrow', '.select-list__option', 'select-focus');
    changeTheme('[data-theme]', '.fa-moon', 'fa-regular', 'fa-solid', 'light-theme', '.dark-mode', 'country-container');
})


d.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = d.querySelector('.input-group__input').value;
    let json = await getData(`https://restcountries.com/v3.1/name/${name}`);
    addCountries('template',json, 'country-container');
})


