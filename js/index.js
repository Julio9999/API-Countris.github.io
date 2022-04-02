import getData from "./dom/getData.js";
import select from "./dom/select.js";
import changeTheme from "./dom/dark-mode.js";
const d = document;

d.addEventListener('click', (e)=>{
    if(e.target.matches('.select-list__option')){
        getData(`region/${e.target.dataset.name}`)
        
    }else if(e.target.matches('.input-group__icon')){
        let name = d.querySelector('.input-group__input').value;
        getData(`name/${name}`)
        changeTheme('[data-theme]', '.fa-moon', '.dark-mode');
    }

    const observer = new MutationObserver(function(){
        changeTheme('[data-theme]', '.fa-moon', '.dark-mode');
        console.log('observer');
    })
    
    var config = {childList: true};
    
    observer.observe(d.getElementById('country-container'), config);
})


d.addEventListener('DOMContentLoaded', (e)=>{
    select('.select-selected', '.select-list', 'is-active', '.select-selected__arrow', '.select-list__option', 'select-focus');
    changeTheme('[data-theme]', '.fa-moon', '.dark-mode');
})


d.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = d.querySelector('.input-group__input').value;
    getData(`name/${name}`)
    

})

