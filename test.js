let miRegex = /as?.a/; // Expresión regular corregida

let msg = '/as?.a/';

let cadenas = ['java','casamentero', 'castaño', 'sabina', 'casualidad', 'asa', 'casta'];

const resultados = [];

for (let i of cadenas) {
    resultados.push({
        Cadena: i,
        Patrón: msg,
        Coincidencia: miRegex.test(i),
    });
}

console.table(resultados);

/*
let miRegex = /as?.a/; // Expresión regular corregida

let msg = '/as?.a/';

let cadenas = ['casamentero', 'castaño', 'sabina', 'casualidad', 'asa', 'casta'];

for (let i of cadenas) {
    const sal = `¿contiene ${i} el patrón ${msg} : ${miRegex.test(i)}`;
    console.log(sal);
}*/