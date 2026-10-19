//punto 1.a
function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();

// punto 1.b
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}

saludarPersona("Andrés");

// punto 1.c

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const resultado = esMayorDeEdad(20);

console.log(resultado);

// punto 2.a


const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};

const resultadoFlecha = esMayorDeEdadFlecha(20);

console.log(resultadoFlecha);

//punto 2.b


const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`);
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`);
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`);
    }
};

for (let i = 1; i <= 10; i++) {
    compararNumeros(i, 5);
}

//punto 3.a



const operacion = (numero1, numero2, callback) => {
    callback(numero1, numero2);
};

const suma = (a, b) => {
    const resultado = a + b;
    console.log(`El resultado de la suma es ${resultado}`);
};

const resta = (a, b) => {
    const resultado = a - b;
    console.log(`El resultado de la resta es ${resultado}`);
};

operacion(10, 5, suma);
operacion(10, 5, resta);

//punto 3.b 


const operaciones = (numero1, numero2, callback) => {
    if (typeof numero1 !== "number" ||
        typeof numero2 !== "number" ||
        !Number.isFinite(numero1) ||
        !Number.isFinite(numero2)) {
        console.log("Debe ingresar solo números.");
    } else {
        callback(numero1, numero2);
    }
};

const sumas = (a, b) => {
    const resultado = a + b;
    console.log(`El resultado de la suma es ${resultado}`);
};

const restas = (a, b) => {
    const resultado = a - b;
    console.log(`El resultado de la resta es ${resultado}`);
};

operacion(10, 5, suma);
operacion(10, 5, resta);
operacion("Hola", 5, suma);
