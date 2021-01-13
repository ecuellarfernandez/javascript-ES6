// Nivel II

// Exercici 7

// Realitzar un programa en ES6, amb al menys una funció.
// Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
// Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.

// Per exemple, si l'usuari introdueix 3 i 5:

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15

const validateMaxNum = number=>number<1 || number>10 ? true : false;

let num1, num2;
do{num1 = parseInt(prompt('Number to multiply (Max 10)'));}while(validateMaxNum(num1));
do{num2 = parseInt(prompt('How many times do you want to multiply this number? (Max 10 times)'));}while(validateMaxNum(num2));

for(let i = 1; i<=num2; ++i){
    console.log(`
        ${num1} X ${i} = ${num1*i}
    `);
}