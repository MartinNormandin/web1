// En ES5
function choixMusique(){
    let sel = document.getElementById('idmusique');
    let optionChoisie = sel.options[sel.selectedIndex].text;
    alert("Vous avez choisit la catégorie : "+optionChoisie);
}