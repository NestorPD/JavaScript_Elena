let frutas1 = ["Manzana", "Banana"];
console.log(frutas); // Manzana y Banana 
console.log(frutas.length); // 2
let primero = frutas[0] // Manzana
let ultimo = frutas[frutas.length - 1]; // Banana
let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]

//Más ejemplos
  let numeros = [1,2,3,4];
  console.log(numeros);
  let frutas = ['pera', 'manzana', 'fresa'];
  let variado = [1, "pera", 2, true,3];

//Mostrar la longitud de los arrays creados
  let longitudNumeros = numeros.length;
  let longitudFrutas = frutas.length;
  let longitudVariado = variado.length;

  // console.log(longitudNumeros);
  // console.log(longitudFrutas);
  // console.log(longitudVariado);

//Mostrar el último elemento de cada Array
  // let ultimoNumeros = numeros[3];
  // let ultimoFrutas = frutas[2];
  // let ultimoVariado = variado[4];
  let ultimoNumeros = numeros[longitudNumeros-1];
  let ultimoFrutas = frutas[longitudFrutas-1];
  let ultimoVariado = variado[longitudVariado-1];

  // console.log(ultimoNumeros);
  // console.log(ultimoFrutas);
  // console.log(ultimoVariado);