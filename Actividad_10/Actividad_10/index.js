// ACTIVIDAD 10 - APLICACIONES WEB I
// Alumno: Emil Layun
// Estructuras de control condicionales y bucles

// ================================
// ESTRUCTURAS CONDICIONALES
// ================================

// Ejercicio 1: Verificar si una persona es mayor de edad.
const edad = 20;
if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// Ejercicio 2: Verificar si un número es par o impar.
const numero = 7;
if (numero % 2 === 0) {
    console.log('El número es par');
} else {
    console.log('El número es impar');
}

// Ejercicio 3: Clasificar una nota.
const nota = 8;
if (nota < 4) {
    console.log('Reprobado');
} else if (nota <= 7) {
    console.log('Aprobado');
} else {
    console.log('Excelente');
}

// ================================
// ESTRUCTURAS DE CONTROL: BUCLES
// ================================

// Ejercicio 4: Imprimir los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 5: Imprimir los números del 10 al 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Ejercicio 6: Realizar 20 iteraciones desde i = 0 e indicar par o impar.
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log('El número es par');
    } else {
        console.log('El número es impar');
    }
}

// Ejercicio 7: Usar template literals para incluir el número.
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}
