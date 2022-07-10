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