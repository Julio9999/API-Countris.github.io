const d = document;

export default function select(selected, list, clase, arrow, option, focus){
    let $list = d.querySelector(list),
    $arrow = d.querySelector(arrow),
    $focus = d.getElementById(focus);
    d.addEventListener('click', (e)=>{
        if(e.target.matches(`${selected}, ${selected} *`)){
            $list.classList.toggle(clase);
            $arrow.classList.toggle(clase);
        }else if(e.target.matches(option)){
            $focus.textContent = e.target.textContent;
            $list.classList.toggle(clase);
            $arrow.classList.toggle(clase);
        }
    })
}

