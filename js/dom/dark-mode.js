const d = document;

export default function changeTheme(elements,  icon, iconLight, iconDark, theme, button, container){
    let $container = d.getElementById(container),
    $icon = d.querySelector(icon),
    $elements = d.querySelectorAll(elements),
    observer = new MutationObserver(()=>{
        $elements = d.querySelectorAll(elements);
        //console.clear();
        //console.log($elements);
        if(localStorage.getItem('theme') == 'dark'){
            $elements.forEach(el => el.classList.remove(theme));
            $icon.classList.replace(iconLight, iconDark);
        }else{
            $elements.forEach(el => el.classList.add(theme));
            $icon.classList.replace(iconDark, iconLight);
        }
    }),
    config = {childList: true};


    if(localStorage.getItem('theme') == 'dark'){
        $elements.forEach(el => el.classList.remove(theme));
        $icon.classList.replace(iconLight, iconDark);
    }else{
        $elements.forEach(el => el.classList.add(theme));
        $icon.classList.replace(iconDark, iconLight);
    }

    d.addEventListener('click', (e)=>{
        if(e.target.matches(`${button}, ${button} *`)){
            if($icon.classList.contains(iconDark)){
                $icon.classList.replace(iconDark, iconLight);
                localStorage.setItem('theme', 'light');
                $elements.forEach(el => el.classList.add(theme));
            }else{
                $icon.classList.replace(iconLight, iconDark);
                localStorage.setItem('theme', 'dark');
                $elements.forEach(el => el.classList.remove(theme));
            }
        }
    })

    observer.observe($container, config);
}
