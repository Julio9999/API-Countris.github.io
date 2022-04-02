const d = document;

export default function changeTheme(elements,  icon, selector){
    const $elements = d.querySelectorAll(elements),
    $moon = d.querySelector(icon);
    console.log($elements)
    if(localStorage.getItem('theme') == 'dark'){
        localStorage.setItem('theme', 'dark');
        $elements.forEach(el =>{
            el.classList.remove('light-theme');
        })
        $moon.classList.remove('fa-regular');
        $moon.classList.add('fa-solid');
    }else{
        localStorage.setItem('theme', 'light');
        $elements.forEach(el =>{
            el.classList.add('light-theme');
        })
            
        $moon.classList.remove('fa-solid');
        $moon.classList.add('fa-regular');
    }
        
    


    d.addEventListener('click', (e)=>{
        if(e.target.matches(icon) || e.target.matches(selector)){
            //console.log('b');
            if($moon.matches('.fa-solid')){
                $moon.classList.replace('fa-solid', 'fa-regular');
                localStorage.setItem('theme', 'light');
                $elements.forEach(el =>{
                    el.classList.add('light-theme');
                })
            }else{
                $moon.classList.replace('fa-regular', 'fa-solid');
                localStorage.setItem('theme', 'dark');
                $elements.forEach(el =>{
                    el.classList.remove('light-theme');
                })
            }
        }
    })
}