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
            threshold: 0.9
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe($container.lastElementChild);
    }

    add();


    function add(){
        let internationalNumberFormat = new Intl.NumberFormat('en-US')
        for(let i=0;i<10 && k < json.length;i++,k++){
            $template.querySelector('.name').textContent = json[k].name.common;
            $template.querySelector('.country__flag').src = json[k].flags.png;
            let nativeName = Object.values(json[k].name.nativeName)[0];
            $template.querySelector('.native-name .response').textContent = nativeName.common;
            $template.querySelector('.population .response').textContent =  internationalNumberFormat.format(json[k].population);
            $template.querySelector('.region .response').textContent =  json[k].region;
            $template.querySelector('.sub-region .response').textContent = json[k].subregion
            $template.querySelector('.capital .response').textContent = json[k].capital;
            if(json[k].hasOwnProperty('tld')) $template.querySelector('.top-level .response').textContent = json[k].tld[0];
            let currencies = '';
            
            for(let currencie in json[k].currencies){
                currencies += " "+json[k].currencies[currencie].name + " " + json[k].currencies[currencie].symbol + ',';
            }
        
            $template.querySelector('.currencies .response').textContent = " "+ (currencies.replace(/,$/, '.'));
            
            let languages = '';
            for(let language in json[k].languages){
                languages += " "+json[k].languages[language] + ",";
            }
            $template.querySelector('.languages .response').textContent = " "+ (languages.replace(/,$/, '.'));
            
            let borders = json[k].borders || '';
            let borders2 = [];
            
            if(borders !== ''){  
                for(let m=0;m<borders.length;m++){
                    json.forEach(country =>{
                        if(country.cca3 === borders[m]){
                            borders2.push(country.name.common);
                        }
                    })
                }
                
                $template.querySelector('.borders ').innerHTML = '';
                $template.querySelector('.borders ').innerHTML = 'Border Countries: '
                let $border_container = d.createElement('div');
                $border_container.classList.add('border_container');
                borders2.forEach(border =>{
                    $border_container.innerHTML += `<span class="border" data-theme>${border}</span>`
                })
                
                $template.querySelector('.borders ').append($border_container);

            }else{
                $template.querySelector('.borders ').innerHTML = '';
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

