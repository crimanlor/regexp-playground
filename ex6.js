/**
 * Queremos crear una función que filtre un array de strings y que solo se quede con aquellos que representan una matrícula de coche española https://es.wikipedia.org/wiki/Matr%C3%ADculas_automovil%C3%ADsticas_de_Espa%C3%B1a
 * 
 * @param {Array<string>} words - Un array de strings
 * @returns {Array<string>} - Devuelve un array con los strings que son matrículas de coche españlas
 */

function filterWords(words) {
    // Expresión regular para verificar si una palabra es una matrícula de coche española.
    const regexp = /^[0-9]{4}[A-Z]{3}$/i;

    // Usa el método de array adecuado para FILTRAR cada uno de los strings para comprobar si realmente son una matrícula usando la expresión regular
    return words.filter(word => regexp.test(word))

   
}

// Juegos de pruebas

// Prueba 1: Array con palabras mixtas
// Explicación: ["1234ABC", "5678DEF", "test", "foo!"] contiene palabras con formato de matrícula ("1234ABC", "5678DEF")
// Resultado esperado: ["1234ABC", "5678DEF"]
console.log(filterWords(["1234ABC", "5678DEF", "test", "foo!"])); // ["1234ABC", "5678DEF"]

// Prueba 2: Array con todas las palabras válidas
// Explicación: ["1234ABC", "5678DEF", "9012GHI"] todas las palabras son matrículas válidas
// Resultado esperado: ["1234ABC", "5678DEF", "9012GHI"]
console.log(filterWords(["1234ABC", "5678DEF", "9012GHI"])); // ["1234ABC", "5678DEF", "9012GHI"]

// Prueba 3: Array con todas las palabras no válidas
// Explicación: ["1234ABC", "hello!", "world?"] solo una palabra contiene el formato de matrícula
// Resultado esperado: ["1234ABC"]
console.log(filterWords(["1234ABC", "hello!", "world?"])); // ["1234ABC"]

// Prueba 4: Array sin ninguna matrícula válida
// Explicación: ["hello", "world", "foo", "bar"] ninguna de las palabras tiene el formato de matrícula
// Resultado esperado: []
console.log(filterWords(["hello", "world", "foo", "bar"])); // []