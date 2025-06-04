const { getDB } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

async function crearUsuario(req, res) {
    const { nombres, apellidos, identificacion, email, rol } = req.body;
    if (!nombres || !apellidos || !identificacion || !email || !rol) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const nuevoUsuario = {
        id: uuidv4(),
        nombres,
        apellidos,
        identificacion,
        email,
        rol
    };
    await getDB().collection('users').insertOne(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
}

async function obtenerUsuarios(req, res) {
    const usuarios = await getDB().collection('users').find().toArray();
    res.json(usuarios);
}

module.exports = { crearUsuario, obtenerUsuarios };