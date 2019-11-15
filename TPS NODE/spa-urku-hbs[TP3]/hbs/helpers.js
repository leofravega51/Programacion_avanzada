const hbs = require('hbs');


//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('nombre', (texto) => {
    return 'URKU PORTFOLIO'
})