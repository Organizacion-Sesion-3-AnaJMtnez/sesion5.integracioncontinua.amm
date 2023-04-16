// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var oper = require('../ispar.js');

// Test
it('comprobar función ispar', function() {
	assert.equal(oper.ispar(2), true);
	assert.equal(oper.ispar(4), true);
    assert.equal(oper.ispar(442), true);
});