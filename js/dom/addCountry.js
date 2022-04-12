const d = document;

export default function addCountry(container,main,country){
    let $container = d.getElementById(container),
    $main = d.getElementById(main),
    $clone_country = d.importNode(country, true),
    $elements = $clone_country.querySelectorAll('.hide');

    
    $clone_country.classList.replace('country', 'country-clone');
    
    $elements.forEach(el => el.classList.remove('hide'));
    
    $container.removeChild($main);
    $container.append($clone_country);
    


    let observer = new MutationObserver(()=>{
        $clone_country.classList.toggle('light-theme');
        $clone_country.querySelector('.country__button-back').classList.toggle('light-theme');
        $clone_country.querySelectorAll('.border').forEach(el => el.classList.toggle('light-theme'));
        console.log('mutacion');
        //let background = getComputedStyle(d.body, 'background-color');
        //$clone_country.querySelector('.country__button-back').style.setProperty('background-color', background);
    }),
    config = {attributes: true};

    observer.observe(d.body, config);

    d.querySelector('.country__button-back').addEventListener('click', (e)=>{
        e.stopPropagation();
        $container.removeChild($clone_country);
        $container.append($main);
    })
}
