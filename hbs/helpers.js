const hbs = require('hbs');

// Helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palablas = texto.split(' ');
    palablas.forEach((palabla, idx) => {
        palablas[idx] = palabla.charAt(0).toUpperCase() + palabla.slice(1).toLowerCase();
    });
    return palablas.join(' ');
})