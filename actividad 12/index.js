// ACTIVIDAD 12 - APLICACIONES WEB I
// Ejercicios de arreglos y objetos
// Abrir index.html y observar los resultados en la consola (F12).

console.log("===== 1. ARREGLOS =====");

// 1.a) Pedir cinco números y guardarlos con push().
const numeros = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`1.a - Ingresá el número ${i + 1} de 5:`));
  numeros.push(numero);
}
console.log("1.a - Arreglo de cinco números:", numeros);

// 1.b) Pedir otros cinco números y almacenar solamente los impares.
const numerosImpares = [];
for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`1.b - Ingresá el número ${i + 1} de 5:`));
  if (Number.isInteger(numero) && numero % 2 !== 0) {
    numerosImpares.push(numero);
  }
}
console.log("1.b - Números impares:", numerosImpares);

// 1.c) Convertir los nombres de frutas a mayúsculas usando forEach().
const frutas = ["pera", "manzana", "banana", "durazno"];
frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});
console.log("1.c - Frutas en mayúsculas (forEach):", frutas);

// 1.d) Crear un NUEVO arreglo con map() sin modificar el original.
const frutasOriginales = ["pera", "manzana", "banana", "durazno"];
const frutasMayusculas = frutasOriginales.map((fruta) => fruta.toUpperCase());
console.log("1.d - Nuevo arreglo con map():", frutasMayusculas);
console.log("1.d - Arreglo original sin modificar:", frutasOriginales);

// 1.e) Filtrar nombres que contengan la cadena "na" con filter().
const frutasConNa = frutasOriginales.filter((fruta) => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});
console.log('1.e - Frutas que contienen "na":', frutasConNa);

console.log("===== 2. OBJETOS =====");

// 2.a) Crear un objeto que represente un producto de indumentaria.
const producto = {
  nombre: "Remera básica",
  precio: 18000,
  stock: 8,
  talles: ["s", "m", "l"]
};
console.log("2.a - Producto:", producto);

// 2.b) Crear cuatro objetos y mostrar solo los que tienen stock menor a 5.
const productos = [
  { nombre: "Remera básica", precio: 18000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Pantalón jean", precio: 45000, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Buzo", precio: 38000, stock: 2, talles: ["s", "m", "l"] },
  { nombre: "Campera", precio: 65000, stock: 15, talles: ["s", "m", "l"] }
];
console.log("2.b - Productos con stock menor a 5:");
productos.forEach((item) => {
  if (item.stock < 5) {
    console.log(item);
  }
});

// 2.c) Usar map() para crear productos con 10% de descuento.
const productosConDescuento = productos.map((item) => {
  return {
    ...item,
    precio: item.precio * 0.9
  };
});
console.log("2.c - Productos con 10% de descuento:", productosConDescuento);
console.log("2.c - Productos originales:", productos);

// 2.d) Usar filter() para obtener productos con stock mayor a 10.
const productosStockAlto = productos.filter((item) => item.stock > 10);
console.log("2.d - Productos con stock mayor a 10:", productosStockAlto);