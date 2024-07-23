/** Validar correos electrónicos */

function isValidEmail(email) {
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Ejemplos de uso:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("user.name@domain.co.uk")); // true
console.log(isValidEmail("invalid-email@domain")); // false
console.log(isValidEmail("another.invalid-email@domain.a")); // false
console.log(isValidEmail("valid_email-123@sub.domain.com")); // true
console.log(isValidEmail("hola@barcelona.info")); // true (pero da false...)


/** Ejercicio:
 * 
 * La función valida varios correos electrónicos. Funciona bien para todos los correos electrónicos menos para el último. Debería validar también, ya que hola@barcelona.info es un correo válido. 
 * 
 * Modifica ligeramente la expresión regular para que también valide este último correo.
 * Ayuda: https://es.javascript.info/regexp-quantifiers
 */