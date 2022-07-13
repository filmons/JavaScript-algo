
let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
    console.log(panier[fruit]);
}

let panier2 = ['fraise', 'banane', 'poire'];

for (const fruit of panier2) {
  // console.log(fruit);
  console.log(panier2.indexOf(fruit));
}