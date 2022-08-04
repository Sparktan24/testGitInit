
document.addEventListener('DOMContentLoaded', function(){
    addWavyUnderline(findAllUnorderedListElements());
    addInnerHTML();
})

function addWavyUnderline(elements){
    elements.style.textDecoration = 'underline wavy';
    
}

function findAllUnorderedListElements(){
    const items = document.querySelector('.ulElements');
    return items;
}

function addInnerHTML(){
    const divT = document.querySelector('#textDiv');
    const text = 'Hello';
    divT.innerHTML = text;
}