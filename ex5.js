/** 
 * 1. Explora como funciona el método .match de los strings: https://javascript.info/regexp-methods#str-match-regexp
 * 2. Modifica el cuerpo de la función para extraer todos los colores hexadecimales presentes en el string. Para simplificar, los colroes hexadecimales siempre tendrán 6 carácteres pero pueden ser tanto en mayúsculas como en minúsculas
 *  
 * * @param {string} s 
 * @returns {Array<string>} Devuelve un array con los colores hexadecimales encontrados
 */


function extractHexColors(s) {
    /** Modifica solamente el cuerpo de la función */   
    const regexp = /#[0-9a-fA-F]{6}/g;
    const matches = s.match(regexp)
    if(!matches){
        return []
    }
    return matches
    // También podría ponerse como return matches || []
}


// Juegos de pruebas


// Prueba 1: Cadena con un color hexadecimal 
// Explicación: "#0041C2 is a valid color."
// Resultado esperado: ["#0041C2"]
console.log(extractHexColors("#0041C2 is a blue called 'Blueberry Blue' ")); // ["#0041C2"]

// Prueba 1: Cadena con colores hexadecimales
// Explicación: "#ff5733 is a bright color and #33ff57 is a green color."
// Resultado esperado: ["#ff5733", "#33ff57"]
console.log(extractHexColors("#ff5733 is a bright color and #33FF57 is a green color.")); // ["#ff5733", "#33FF57"]


// Prueba 3: Cadena sin colores hexadecimales
// Explicación: "This string has no hex colors."
// Resultado esperado: []
console.log(extractHexColors("This string has no hex colors.")); // []
