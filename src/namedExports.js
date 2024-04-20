// Forma #1 - Palabra export
export const nombre = 'Armando';

export const saludo = (nombre) => {
    console.log(`Hola ${nombre}, mucho gusto!`);
};

export const obtenerPosts = () => {
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

export { apellido, amigos, saludo2 };

