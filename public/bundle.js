'use strict';

// Forma #1 - Palabra export
const nombre = 'Armando';

const saludo = (nombre) => {
    console.log(`Hola ${nombre}, mucho gusto!`);
};

const obtenerPosts = () => {
    const posts = ['Post1','Post2','Post3'];
    return posts;
};


// Forma #2 - Final del documento

const apellido = 'Gonzalez';

const amigos = () => {
    return ['Alejandro','José','Jaime'];
};

const saludo2 = (apellido) => {
    console.log(`Hola ${apellido}, mucho gusto!`);
};

/*
    Forma #1
*/
// export default () => {
//     return {
//         nombre: 'Armando',
//         correo: 'armando@mail.com'
//     }
// };


/*
    Forma #2
*/
const obtenerUsuario = () => {
    const usuario = {
        nombre: 'Elías',
        correo: 'elias@mail.com'
    };
    return usuario;
};

console.log('Soy código que se ejecuta desde el archivo emptyExport.js');

const correo = 'correo@mail.com';

/*
    Named Imports
*/

console.log(' --- Named Imports --- ');
console.log(`Mi nombre es ${nombre}`);
saludo('Elías');
console.log(obtenerPosts());
console.log(' --- Namespace Imports --- ');
saludo2(`Armando ${apellido}`);
console.log(amigos());
console.log(' --- Default Imports --- ');
console.log(obtenerUsuario());

/*
    Empty Imports
    Carga todo el código pero sin hacer ningun objeto
*/
console.log(' --- Empty Export ---');
console.log(correo);
