const d = document;

export default function getCountryDetails(container,main,country){
    let $container = d.getElementById(container),
    $main = d.getElementById(main),
    $clone_country = d.importNode(country, true),
    $elements = $clone_country.querySelectorAll('.hide');

    let altura = d.documentElement.scrollTop;
    
    d.documentElement.scrollTo(0,0);
    
    
    $clone_country.classList.replace('country', 'country-clone');
    
    $elements.forEach(el => el.classList.remove('hide'));
    
    let $upButton = d.createElement('button');
    $upButton.classList.add('up_button');
    $upButton.textContent = ' ⬆️ ';
    $container.removeChild($main);
    $container.append($clone_country);
    $container.append($upButton);

    if(d.body.classList.contains('light-theme')) $upButton.classList.add('light-theme');

    let observer = new MutationObserver(()=>{
        $clone_country.classList.toggle('light-theme');
        $clone_country.querySelector('.country__button-back').classList.toggle('light-theme');
        $clone_country.querySelectorAll('.border').forEach(el => el.classList.toggle('light-theme'));
        $upButton.classList.toggle('light-theme');
    }),
    config = {attributes: true};

    observer.observe(d.body, config);

    d.querySelector('.country__button-back').addEventListener('click', (e)=>{
        e.stopPropagation();
        console.log('subido');
        $container.removeChild($clone_country);
        $container.append($main);
        d.documentElement.scrollTo(0, altura);
    })

    d.addEventListener('click', (e)=>{
        if(e.target === $upButton){
            d.documentElement.scrollTo({
                behavior: 'smooth', 
                top: 0
            });
        }
    })

}
