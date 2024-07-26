/**
 * DIFÍCIL: Nos pasan dos strings por parámetro. Queremos usar expresiones regulares para determinar si un string pertenece a otro (es decir es un substring)
 * 
 * Ayuda: https://lenguajejs.com/javascript/regexp/expresiones-regulares/#c%C3%B3mo-crear-una-regexp
 */
/**
 * 
 * @param {string} s1 String principal. Cadena de texto donde vamos a realizar la búsqueda 
 * @param {string} s2 String secundario.  
 * @returns string Retorna true si s2 está contenido en s1. En caso contrario retorna false
 */
function isSubstring(s1, s2) {
    const regexp = new RegExp (s2, "i")
    // Busco y testeo si el string s2, contiene s1
    return regexp.test(s1)
}

// Prueba 1: Substring presente en la cadena principal
// Explicación: "world" es un substring de "Hello, world!"
// Resultado esperado: true
console.log(isSubstring("Hello, world!", "world")); // true

// Prueba 2: Substring no presente en la cadena principal
// Explicación: "planet" no es un substring de "Hello, world!"
// Resultado esperado: false
console.log(isSubstring("Hello, world!", "planet")); // false

// Prueba 3: Substring igual a la cadena principal
// Explicación: "test" es igual a "test"
// Resultado esperado: true
console.log(isSubstring("test", "test")); // true

// Prueba 4: Cadena vacía como cadena principal
// Explicación: Una cadena vacía no puede contener otro substring no vacío
// Resultado esperado: false
console.log(isSubstring("", "text")); // false

// Prueba 5: Cadena vacía como cadena secundaria
// Explicación: Una cadena vacía siempre es un substring de otra cadena de texto
// Resultado esperado: true
console.log(isSubstring("text", "")); // true