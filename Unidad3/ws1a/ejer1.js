/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isOdd(number){
    if(!number%2){
        return false;
    }else{
        return true;
    }
}

console.log(isOdd(3));