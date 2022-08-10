let calculer = () => {
    let exp = document.getElementById('exp').value;
    let expValuee = eval(exp);
    document.getElementById('res').value = expValuee;
    document.getElementById('spres').innerHTML ="<strong>"+expValuee+"</strong>";
}

let listerFilms = (listeFilms) =>{
    
    let contenuTable = `
    <div id='divLst'>
    <i class="bi bi-file-excel" onClick="$('#divLst').toggle();"></i>   
    <table class="table table-primary table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">TITLE</th>
                <th scope="col">YEAR</th>
                <th scope="col">DIRECTOR</th>
                
                </tr>
            </thead>
            <tbody>
        `;
       
        listeFilms.forEach(unFilm => {
            contenuTable += `
                <tr>
                <td>${unFilm.Title}</td>
                <td>${unFilm.Year}</td>
                <td>${unFilm.Director}</td>
                
                </tr>
            `;
        });        
        contenuTable += `             
            </tbody>
        </table>
        </div>
    `;
        return contenuTable;
}

let montrerListeFilms = (listeFilms) => {
    document.getElementById('contenu').innerHTML = listerFilms(listeFilms);
}

let chargement = () => {
    
    let selFilms = document.getElementById('selFilms');
    selFilms.options[selFilms.options.length] = new Option("Sélectionner un film");
    films.forEach(unFilm => {
        selFilms.options[selFilms.options.length] = new Option(unFilm.Title, unFilm.Title.substring(0,2));
    });
    
    montrerListeFilm(films);
}

let afficherInfosFilms = () => {
    let selFilms = document.getElementById('selFilms');
    //let nom = selFilms.options[selFilms.selectedIndex].text;
    let filmChoisit = films[selFilms.selectedIndex-1];
     let reponse = `
     <p>PAYS = ${filmChoisit.Title}</p>
     <p>MESURE = ${filmChoisit.Year}</p>
         <p>POIDS = ${filmChoisit.Director}</p>
     `;
     montrerListeFilms([filmChoisit]);
}