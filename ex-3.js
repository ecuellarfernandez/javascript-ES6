// Exercici 3
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Resultat per consola: 'a long time ago in a galaxy far far away'

// Nota: no fa falta fer un "join".

console.log(epic.reduce((acc, currVal)=> `${acc} ${currVal}`));
