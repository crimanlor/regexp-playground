/**
 * Kayak.com quiere validar todos los pasaportes de los viajeros 
 * 
 */

const passports = ['EPL046023C', 'CVQ981177F', 'WOZ567136V', 'PASAPORTEFALSO'];
const regexp = /[A-Z]{3}[0-9]{6}[A-Z]/;

const allAreValid = passports.every(passport => regexp.test(passport))

console.log(allAreValid)