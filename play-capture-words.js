const text = "azul El cielo es  pero no mis azulejos que están sucios.";

// Para capturar la palabra azul pero no 'azulejos'
const regexp = /\bazul\b/

console.log(text.match(regexp))