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
    }
    return usuario;
};

export default obtenerUsuario;