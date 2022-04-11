const d = document;

export default function addCountry(container, country){
    let $container = d.querySelector(container),
    $clone_country = d.importNode(country, true),
    $elements= $clone_country.querySelectorAll('.hide');


    //console.log('aaaa');


    $elements.forEach(el => el.classList.remove('hide'));

    let altura = d.documentElement.scrollTop,
    $dom = $container.innerHTML;
    //console.log(altura);


    $container.innerHTML = '';
    $container.append($clone_country);

    let button = d.querySelector('.country__button-back');

    button.addEventListener('click', (e)=>{
        e.stopPropagation();
        $container.innerHTML = '';
        $container.innerHTML = $dom;
        d.documentElement.scrollTo(0, 0);
        d.documentElement.scrollTo(0, altura);
    })
}
