const d = document;
export default function addCountries(template,json, container){
    
    let $container = d.getElementById(container),
    $template = d.getElementById(template).content,
    $fragment = d.createDocumentFragment(),
    k = 0;
    

    $container.innerHTML = '';
    const callback = (entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                add();
            }
        })
    }
    const setObserver = () =>{
        const options ={
            threshold: 0.1
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe($container.lastElementChild);
    }

    add();


    function add(){
        for(let i=0;i<10 && k < json.length;i++,k++){
            if(d.body.classList.contains('light-theme')) $template.querySelector('.country').classList.add('light-theme')
            $template.querySelector('#name').textContent = json[k].name.common;
            $template.querySelector('img').src = json[k].flags.png;
            let nativeName = Object.values(json[k].name.nativeName)[0];
            $template.querySelector('#native-name').textContent = nativeName.common;
            $template.querySelector('#population').textContent = json[k].population;
            $template.querySelector('#region').textContent = json[k].region;
            $template.querySelector('#sub-region').textContent = json[k].subregion
            $template.querySelector('#capital').textContent = json[k].capital;
            if(json[k].hasOwnProperty('tld')) $template.querySelector('#top-level').textContent = json[k].tld[0];
            let currencies = '';
            
            for(let currencie in json[k].currencies){
                currencies += " "+json[k].currencies[currencie].name + " " + json[k].currencies[currencie].symbol + ',';
            }
            
            $template.querySelector('#currencies').textContent = 'Currencies: ' +" "+currencies;
            
            let languages = '';
            for(let language in json[k].languages){
                languages += json[k].languages[language] + ", ";
            }
            $template.querySelector('#languages').textContent = 'Languages: ' +" "+languages;
            let borders = json[k].borders;
            

            if(borders != null){
                $template.querySelector('#borders').innerHTML = '';
                $template.querySelector('#borders').innerHTML = 'Border Countries: <br>'
                let $border_container = d.createElement('div');
                $border_container.classList.add('border_container');
                borders.forEach(border =>{
                    let $border = d.createElement('span');
                    $border.classList.add('border');
                    $border.textContent = border;
                    $border_container.append($border);
                })
                $template.querySelector('#borders').append($border_container);
            }

            let $clone = d.importNode($template, true);
            $fragment.append($clone);
            if(i == 9 || k+1 == json.length){
                $container.append($fragment);
                setObserver();
            }
        }

    }
}

