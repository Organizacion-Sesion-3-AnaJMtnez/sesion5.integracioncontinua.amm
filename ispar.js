/* Función ispar */
var par = function espar( x ) {
    return !( x & 1 );
  }


/*En binario, los número pares tienen el último bit a 0,
 mientras que los impares tienen el último bit a 1:

var par = function espar (a) {
	return a;	
};

const par = (numero) => {
    if (typeof numero !== "number")
      return console.log("Debes ingresar un numero");
  
    if (numero % 2 === 0) {
      return console.log(`El numero ${numero} es Par`);
    }
  
    if (numero % 2 !== 0) {
      return console.log(`El numero ${numero} es Impar`);
    }
  };

/* Función resta 
var resta = function suma (a, b) {
	return a - b;	
}; */

/* Exportación de funciones */
module.exports = {
	espar
}