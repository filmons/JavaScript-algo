let monTableau1 = new Array('un', 'deux', 'trois');
let monTableau2 = Array('un', 'deux', 'trois');
let monTableau3 = ['un', 'deux', 'trois'];

// Ancienne version
let monTableau2DA = new Array(
    Array('Mark', 'Jeff', 'Bill'),
    Array('Zuckerberg', 'Bezos', 'Gates')  
);

// Nouvelle version
let monTableau2DN = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2DN[0][monTableau2DN.length - 1])

// how to add un element in table




let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.push('cinq');
monTableau.unshift('zero');
// console.log(monTableau);

let monTableau2Demosion = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2Demosion[1].unshift('test');
// console.log(monTableau2D);

let monTableauAssociatif1 = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
monTableauAssociatif1['nationalite'] = 'Américaine';
console.log(monTableauAssociatif1);


// how to delete 

let monTableau4 = ['un', 'deux', 'trois', 'quatre'];
monTableau.pop(); // supprime le dernier élément
monTableau.shift(); // supprime le premier élément
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D[0].shift(); // supprime le premier élément, de mon premier élément (donc, Mark)
// console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
delete(monTableauAssociatif.poste);
// console.log(monTableauAssociatif);


///
let monTableauN = ['un', 'deux', 'trois', 'quatre'];
console.log(monTableau.indexOf('deux')); // retourne 1



// function splice for cred
let monTableauAZ = ['un', 'deux', 'trois', 'quatre'];
monTableauAZ.splice(1, 0, 'random', 'pie');
// console.log(monTableau);

let monTableau2D6 = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D6.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D6);

let monTableauAssociatif5 = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);