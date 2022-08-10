let animaux = [
                    {
                        "nom": "Antilope",
                        "pays": "Amerique du Nord",
                        "mesure": 90,
                        "poids": 50
                    },
                    {
                        "nom": "Carcajou",
                        "pays": "Amerique du Nord",
                        "mesure": 90,
                        "poids": 13
                    },
                    {
                        "nom": "Chimpanze",
                        "pays": "Afrique equatoriale",
                        "mesure": 170,
                        "poids": 50
                    },
                    {
                        "nom": "Gibbon",
                        "pays": "Asie",
                        "mesure": 2000,
                        "poids": 8
                    },
                    {
                        "nom": "Porc-epic",
                        "pays": "Amerique du Nord",
                        "mesure": 90,
                        "poids": 12
                    },
                    {
                        "nom": "Condor",
                        "pays": "Amerique du Nord",
                        "mesure": 850,
                        "poids": 10
                    },
                    {
                        "nom": "Faucon",
                        "pays": "Amerique du Nord",
                        "mesure": 90,
                        "poids": 50
                    },
                    {
                        "nom": "Pelican",
                        "pays": "Amerique du Nord",
                        "mesure": 90,
                        "poids": 40
                    },
                    {
                        "nom": "Saumon",
                        "pays": "Amerique du Nord",
                        "mesure": 45,
                        "poids": 4
                    },
                    {
                        "nom": "Carpe",
                        "pays": "Amerique du Nord",
                        "mesure": 65,
                        "poids": 5
                    }
                ];

let chargerAnimaux = () => {     
    let selAnimaux = document.getElementById('selAnimaux');
    selAnimaux.options[selAnimaux.options.length]= new Option("Selectionner un animal");
    animaux.forEach(unAnimal => {
        selAnimaux.options[selAnimaux.options.length] = new Option(unAnimal.nom,unAnimal.nom.substring(0,3));
    });

    let contenuTable = `
        <table class="table">
            <thead>
                <tr>
                <th scope="col">NOM</th>
                <th scope="col">PAYS</th>
                <th scope="col">MESURE</th>
                <th scope="col">POIDS</th>
                </tr>
            </thead>
            <tbody>
        `;

        animaux.forEach(unAnimal => {
            contenuTable += `
                <tr>
                <td>${unAnimal.nom}</td>
                <td>${unAnimal.pays}</td>
                <td>${unAnimal.mesure}</td>
                <td>${unAnimal.poids}</td>
                </tr>
            `;
        });
        contenuTable += `
            </body>
        </table>
    `;
    document.getElementById('contenu').innerHTML = contenuTable;
}

let afficherInfosAnimal = () => {
    let selAnimaux = document.getElementById('selAnimaux');
    //let nom = selAnimaux.options[options.selectedIndex].text;
    let animalChoisit = animaux[selAnimaux.selectedIndex-1];
    let reponse = `
        <p>PAYS = ${animalChoisit.pays}</p>
        <p>MESURE = ${animalChoisit.mesure}</p>
        <p>POIDS = ${animalChoisit.poids}</p>

    `;
    document.getElementById('infosAnimal').innerHTML = reponse;

}