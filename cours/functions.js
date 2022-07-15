let maFonction1 = function(){
    console.log('test');
  }
  
  let maFonction2 = () => {
    console.log('test');
  }
  
  let maFonction3 = () => console.log('test');
  
  // Dans la pratique, on l'utilise surtout pour les petites fonctions anonymes
  // Nous verrons plus tard que ces fonctions fléchées n'ont pas de this


  // function bonjour(prenom) {
  
//   let resultat = "Bonjour " + prenom; // Variable locale
//   let maClosure = () => console.log(resultat);
//   return maClosure;
  
// }

// function bonjour_bis(prenom) {
  
//   let resultat = "Bonjour " + prenom; // Variable locale
//   console.log(resultat);
  
// }

// let maFonction = bonjour('Evan');
// maFonction();
// bonjour_bis('Nicolas');

function timer() {
    let secondes = 0;
    
    let maClosure = () => {
      return ++secondes;
    }
    return maClosure;
  }
  
  let monTimer = timer();
  console.log(monTimer());
  console.log(monTimer());
  console.log(monTimer());
  
  let monDeuxiemeTimer = timer();
  console.log(monDeuxiemeTimer());
  
  console.log(monTimer());

////////////////////////

  function addition(...nombres) {

    let resultat = 0;

    nombres.forEach(nombre => {
        resultat += nombre;
    });

    console.log(resultat);

}

addition(4, 9, 5, 415, 78, 54, 5);



// Exemple 1 : fusionner plusieurs tableaux
let fruits = ['fraise', 'banane', 'poire'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];

// console.log(aliments);

// Exemple 2 : découper une chaîne de caractères en plusieurs éléments
let phrase = "Bonjour !";
let phraseTableau = [...phrase];

// console.log(phraseTableau);

// Exemple 3 : sélectionner un élément, et stocker les autres dans une variable
let devises = ['dollars', 'euro', 'yen'];

// Sans décomposition
// let premiereDevise = devises[0];
// let autres = [devises[1], devises[2]];

// Avec décomposition
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise);
console.log(autres);