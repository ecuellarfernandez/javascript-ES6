// Exercici 1
// Converteix a funcions fletxa:


// function multiply(num1, num2) {
//    return num1 * num2;
// }

    const multiplyArrow = (num1, num2) => num1*num2;

// 

// function toCelsius(fahrenheit) {
//    return (5/9) * (fahrenheit-32);
// }

    const toCelsiusArrow = fahrenheit=> (5/9)*(fahrenheit-32);

// 

// This function returns a string padded with leading zeros
// function padZeros(num, totalLen) {
//    var numStr = num.toString();
//    var numZeros = totalLen - numStr.length;
//    for (var i = 1; i <= numZeros; i++) {
//       numStr="0" + numStr; 
//       } 
//    return numStr;
//  } 

    const padZerosArrow = (num, totalLen) => totalLen>num.length ? padZeros(`0${num}`, totalLen) : num;

//  

// function power(base, exponent) { 
//    var result=1; 
//    for (var i=0; i < exponent; i++) { 
//          result *=base; 
//    } 
//    return result;
// } 

    const powerArrow = (base, exp) => exp==1 ? base : base * power(base, exp-1);

// 

// function greet(who) {
//     console.log("Hello " + who);
// }

    const greetArrow = who => console.log(`Hola ${who}`);