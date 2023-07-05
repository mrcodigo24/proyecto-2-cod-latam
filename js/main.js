function saludar() {
    console.log("¡Hola! ¿Cómo estás?");
  }
  
  saludar(); // Llamada a la función
  
  var saludar = function(nombre) {
    console.log("¡Hola, " + nombre + "!");
  };
  
  saludar("Juan"); // Llamada a la función

  function multiplicar(a, b) {
    var resultado = a * b;
    return resultado;
  }
  
  var producto = multiplicar(4, 6); // Llamada a la función y asignación del valor de retorno
  console.log("El producto es: " + producto);

  function sumar(a, b) {
    var resultado = a + b;
    console.log("El resultado de la suma es: " + resultado);
  }
  
  sumar(3, 5); // Llamada a la función con argumentos

  var restar = (a, b) => {
    var resultado = a - b;
    console.log("El resultado de la resta es: " + resultado);
  };
  
  restar(8, 3); // Llamada a la función