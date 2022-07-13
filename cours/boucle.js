
let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    console.log(panier[fruit]);
}

let panier2 = ['fraise', 'banane', 'poire'];

for (const fruit of panier2) {
  // console.log(fruit);
  console.log(panier2.indexOf(fruit));
}


// forEach
let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];

// for (const pays of listeDePays) {
//     console.log(pays);
// }

// listeDePays.forEach(function(pays){
//     console.log(pays);
// });

listeDePays.forEach(pays => console.log(pays));


///////
let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);