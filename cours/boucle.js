
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



// "@expo-google-fonts/inter": "^0.2.0",
// "@react-native-async-storage/async-storage": "^1.15.14",
// "@react-native-community/async-storage": "^1.12.1",
// "@react-native-community/slider": "^4.1.12",
// "@react-navigation/bottom-tabs": "^6.0.9",
// "@react-navigation/native": "^6.0.6",
// "@react-navigation/native-stack": "^6.2.5",
// "@reduxjs/toolkit": "^1.7.1",
// "expo": "~44.0.0",
// "expo-app-loading": "^1.3.0",
// "expo-av": "~10.2.0",
// "expo-font": "~10.0.4",
// "expo-status-bar": "~1.2.0",
// "expo-video-player": "^2.0.3",
// "react": "17.0.1",
// "react-dom": "17.0.1",
// "react-native": "0.64.3",
// "react-native-elements": "^3.4.2",
// "react-native-gesture-handler": "^2.1.0",
// "react-native-paper": "^4.11.1",
// "react-native-safe-area-context": "^3.3.2",
// "react-native-screens": "~3.10.1",
// "react-native-svg": "^12.1.1",
// "react-native-svg-transformer": "^1.0.0",
// "react-native-swiper": "^1.6.0",
// "react-native-video": "^5.2.0",
// "react-native-web": "0.17.1",
// "react-native-webview": "^11.15.0",
// "react-redux": "^7.2.6",
// "redux": "^4.1.2",
// "redux-thunk": "^2.4.1"