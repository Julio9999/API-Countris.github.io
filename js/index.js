import getData from "./dom/getData.js";
import select from "./dom/select.js";
import changeTheme from "./dom/dark-mode.js";
import addCountries from "./dom/addCountries.js";
import getCountryDetails  from "./dom/getCountryDetails.js";
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
        if(e.target.matches('.response')){
            getCountryDetails('container', d.querySelector('.main'), e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
        }else if(e.target.matches('.country-heading__item')){
            getCountryDetails('container', d.querySelector('.main'), e.target.parentElement.parentElement.parentElement.parentElement);
        }else if(e.target.matches('.country-heading')){
            getCountryDetails('container', d.querySelector('.main'), e.target.parentElement.parentElement.parentElement);
        }else if(e.target.matches('.text-container')){
            getCountryDetails('container', d.querySelector('.main'), e.target.parentElement.parentElement);
        }else if(e.target.matches('.country-content')){
            getCountryDetails('container', d.querySelector('.main'), e.target.parentElement);
        }
    }
})


d.addEventListener('DOMContentLoaded', async(e)=>{
    changeTheme('[data-theme]', '.fa-moon', 'fa-regular', 'fa-solid', 'light-theme', '.dark-mode', 'country-container');
    select('.select-group', '.select-list','.select-list__option', 'select-focus', '.select__arrow');

    json = await getData('https://restcountries.com/v3.1/all');
    addCountries('template',json, 'country-container');
    let data = d.createElement('span');
    data.setAttribute('id', 'data');
    data.innerHTML = JSON.stringify(json)
    data.style.setProperty('display','none');
    d.body.append(data);

})


d.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = d.querySelector('.input-group__input').value;
    let json = await getData(`https://restcountries.com/v3.1/name/${name}`);
    addCountries('template',json, 'country-container');
})
