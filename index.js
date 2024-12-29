const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Lista de profesiones
const professions = [
    { id: 1, name: 'Fontanero' },
    { id: 2, name: 'Electricista' },
    { id: 3, name: 'Carpintero' },
    { id: 4, name: 'Programador' },
    { id: 5, name: 'Doctor' }
];

// Ruta para obtener todas las profesiones
app.get('/professions', (req, res) => {
    res.json(professions);
});

// Ruta para obtener una profesión por ID
app.get('/professions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const profession = professions.find(p => p.id === id);

    if (profession) {
        res.json(profession);
    } else {
        res.status(404).json({ message: 'Profesión no encontrada' });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
