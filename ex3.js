/**
 * El acceso a las Webs de banca electrónica normalmente se hace utilizando un PIN de 4 o 6 cifras.
 * Crea una expresión regular que compruebe si un PIN tiene 4 o 6 dígitos
 * URL kata: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
 * 
 * Ayuda: Prueba primero de resolverlo solamente para 4 dígitos.
 * Luego, busca información sobre cómo usar el operador OR en las expresiones regulares.
 * 
 * @param {string} pin 
 */

function validatePIN(pin) {
    //return true or false
    return /^(\d{4}|\d{6})$/.test(pin);

}

// Juegos de pruebas

// Prueba 1: PIN con 4 dígitos
// Explicación: "1234" tiene exactamente 4 dígitos, por lo tanto, es un PIN válido
// Resultado esperado: true
console.log(validatePIN("1234")); // true

// Prueba 2: PIN con 6 dígitos
// Explicación: "123456" tiene exactamente 6 dígitos, por lo tanto, es un PIN válido
// Resultado esperado: true
console.log(validatePIN("123456")); // true

// Prueba 3: PIN con 5 dígitos
// Explicación: "12345" tiene 5 dígitos, lo cual no es válido según las especificaciones (solo se permiten 4 o 6 dígitos)
// Resultado esperado: false
console.log(validatePIN("12345")); // false

// Prueba 4: PIN con 7 dígitos
// Explicación: "1234567" tiene 7 dígitos, lo cual no es válido según las especificaciones (solo se permiten 4 o 6 dígitos)
// Resultado esperado: false
console.log(validatePIN("1234567")); // false

// Prueba 5: PIN con letras y dígitos
// Explicación: "1234a" contiene letras además de dígitos, por lo tanto, no es un PIN válido
// Resultado esperado: false
console.log(validatePIN("1234a")); // false

// Prueba 6: PIN con caracteres especiales
// Explicación: "12@4" contiene caracteres especiales además de dígitos, por lo tanto, no es un PIN válido
// Resultado esperado: false
console.log(validatePIN("12@4")); // false