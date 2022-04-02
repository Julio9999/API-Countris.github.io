const d = document,
$template = d.getElementById('template').content,
fragment = d.createDocumentFragment(),
$container = d.getElementById('country-container');

export default function getData(region){
    let xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', (e)=>{
        if(xhr.readyState !== 4) return
        let json = xhr.response;
        
        
        for(let i = 0; i<10; i++){
            $template.querySelector('#name').textContent = json[i].name.common;
            $template.querySelector('img').src = json[i].flags.png;
            $template.querySelector('#population').textContent = json[i].population;
            $template.querySelector('#region').textContent = json[i].region;
            $template.querySelector('#capital').textContent = json[i].capital;
            let $clone = d.importNode($template, true);
            fragment.append($clone);
        }
        $container.innerHTML = '';
        $container.append(fragment);
        
        
    })

    xhr.open('GET', `https://restcountries.com/v3.1/${region}/`, true);
    xhr.responseType = 'json';
    xhr.send();
}