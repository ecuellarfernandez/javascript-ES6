// Exercici 4
// Crear una funció que accepti un string i retornada aquest string revertit. Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

const stringReverse = string=> [...string].reverse().join("");

console.log(stringReverse("hola"));