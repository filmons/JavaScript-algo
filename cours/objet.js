let chien = {
    race: 'Shiba',
    poil: 'Court',
    // aboyer: function(){
    //     console.log('Ouaf ouaf');
    // }
    aboyer: () => console.log('Ouaf ouaf')
}
// une function dans un obejet est une methode

chien.aboyer();

// let magicien = {
//     attaquer: function(){
//         console.log('Le magicien lance un sort');
//     }
// }
// let guerrier = {
//     attaquer: function(){
//         console.log('Le guerrier prend son épée');
//     }
// }

// magicien.attaquer();
// guerrier.attaquer();
/////////////////////////////////////////////

let informations = ['superSayen', '25', 'homme'];

// Sans décomposition
// let pseudo = informations[0];
// let age    = informations[1];
// let sexe   = informations[2];

// Avec décomposition
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);

/////////////
let nombres = [10, 45, 75, 10, 24, 45];
// let monSet  = new Set(nombres);
let monSet = new Set();

monSet.add('70');
monSet.add(87);
// monSet.delete(87);

console.log(monSet.size);


////////////////

let utilisateurs1 = new Map();

utilisateurs1.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG',
});

//
let utilisateurs12 = new WeakMap();

let index = {
    id: 1
}

let utilisateurs123 = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

voitures.set(index, utilisateurs123);

// voitures.delete(index);
console.log(utilisateurs123);


  /////////////////////////


utilisateurs.set('Bill Gates', {
    email: 'bill@gatesnotes.com',
    poste: 'Sauver le monde',
});

// utilisateurs.delete('Bill Gates');

console.log(utilisateurs);

//
let voiture1 = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
  }
  let voiture2 = {
    constructeur: 'Renault',
    modele: 'Espace'
  }
  
  let voitures = new WeakSet([voiture1, voiture2]);
  console.log(voitures);
  ////////////////