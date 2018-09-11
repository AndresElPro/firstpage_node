const express = require('express');
// Traemos o requerimos el paquete de express

const app     = express();
// Express no puedo funcionar solo así, lo asignamos a otra constante que incluye express


app.use(express.static('public'));
// app usa a travéz de express mis archivos estaticos que estan en la carpeta public

/*
    app.get('/', (req, res) => {
        res.end('works!');
    })
*/
// Aplicación(app) cada vez que te pidan con el método "get", la ruta inicial
// la función resive las peticiones(request(req)) y respuestas(respond(res))
// cada vez que esta función sea ejecutada va a mandar una respuesta a travéz del
// método "end" y dira que funciona(works!) y esto se elimina para ocupar HTML y CSS

app.listen(3000, () => {
    console.log('servidor iniciado.');
});
// Configurar el puerto con el cúal va a escuchar
// y una función la cúal en la consola dice, 'servidor iniciado.'