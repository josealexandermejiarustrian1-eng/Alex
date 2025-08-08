// 1. Crear un array
let frutas = ["manzana", "banana", "cereza"];
console.log(frutas);

// 2. Agregar al final
frutas.push("durazno");
console.log(frutas);

// 3. Eliminar del final
frutas.pop();
console.log(frutas);

// 4. Agregar al principio
frutas.unshift("uva");
console.log(frutas);

// 5. Eliminar del principio
frutas.shift();
console.log(frutas);

// 6. Buscar el índice de un elemento
let indice = frutas.indexOf("banana");
console.log(indice);

// 7. Acceder a un elemento con índice
console.log(frutas[1]);

// 8. Recorrer el array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  }