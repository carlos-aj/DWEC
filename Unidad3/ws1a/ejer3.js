/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers){
    mayor = 0;
    for(i = 0; i<=numbers.length; i++){
        if(mayor < numbers[i]){
            mayor = numbers[i];
        }
    }
    return mayor;
}

console.log(getBiggestNumber([3, 8, 2, 1, 10]));