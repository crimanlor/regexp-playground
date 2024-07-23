/**
 * Queremos crear una función que "limpie" todos los números de un string
 * Kata: https://www.codewars.com/kata/57e1e61ba396b3727c000251
 * 
 * @param {string} s 
 * @returns Devuelve un string sin números
 */

function stringClean(s) {
    // Cambia únicamente la siguiente línea
    const regex = /[0-9]/g;
    // const regex = /\d/g; - Sería otra opción

    //https://javascript.info/regexp-methods#str-replace-str-regexp-str-func
    return s.replace(regex, '');
}

// Juegos de pruebas

// Prueba 1: Cadena con números al principio
// Explicación: "123hello" contiene números al principio que deben ser eliminados
// Resultado esperado: "hello"
console.log(stringClean("123hello")); // "hello"

// Prueba 2: Cadena con números al final
// Explicación: "world456" contiene números al final que deben ser eliminados
// Resultado esperado: "world"
console.log(stringClean("world456")); // "world"

// Prueba 3: Cadena con números en el medio
// Explicación: "foo123bar" contiene números en el medio que deben ser eliminados
// Resultado esperado: "foobar"
console.log(stringClean("foo123bar")); // "foobar"