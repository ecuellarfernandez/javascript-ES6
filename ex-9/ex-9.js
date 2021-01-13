// Nivel III
// Exercici 9
// Aquest exercici tracta de crear un cercador. Donada una llista de noms, a l'introduir un nom al cercador només s'han de mostrar aquells que coincideixin.
// Seria desitjable que vagi filtrant conforme es va omplint el nom. També tenir en compte maquetar la solució final perquè tingui bon aspecte.

const ul_html = document.getElementById('myUl');
    const search_html = document.getElementById('myInput');

let names = ['Albert', 'Ismael', 'Luis', 'Ruben', 'Jonatan', 'Jake', 'Jose'];

search_html.addEventListener('keyup', e=>{
    const searchValue = e.target.value.toLowerCase().trim();

    const filteredNames = names.filter(name=> name.toLowerCase().trim().includes(searchValue));
    renderNames(filteredNames);

    if(filteredNames.length === 0) return renderNames(['No results found ☹️']);
});

function renderNames(arr){
    const html = arr.map((item)=>{
        return `<li>${item}</li>`
    }).join('');

    ul_html.innerHTML = html;
}
renderNames(names);