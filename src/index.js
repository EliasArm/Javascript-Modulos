/*
    Named Imports
*/

import { nombre as nombreImportado, saludo, obtenerPosts } from './namedExports';
console.log(' --- Named Imports --- ');
const nombre = 'Elías';
console.log(`Mi nombre es ${nombreImportado}`);
saludo('Elías');
console.log(obtenerPosts());


/*
    Namespace Imports
*/
import * as datos from './namedExports';
console.log(' --- Namespace Imports --- ');
datos.saludo2(`Armando ${datos.apellido}`);
console.log(datos.amigos());

/*
    Default Imports
*/
import obtUsuario from './defaultExport';
console.log(' --- Default Imports --- ');
console.log(obtUsuario());

/*
    Empty Imports
    Carga todo el código pero sin hacer ningun objeto
*/
console.log(' --- Empty Export ---');
import './emptyExport';
import { correo } from './emptyExport';
console.log(correo);
