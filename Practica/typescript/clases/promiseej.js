"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('hola');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase));
})();
