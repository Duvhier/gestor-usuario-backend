const { getDB } = require('../database/db');
const { v4: uuidv4 } = require('uuid');

async function crearRol(req, res) {
    const { nombre, descripcion } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre del rol es requerido" });

    const nuevoRol = { id: uuidv4(), nombre, descripcion };
    await getDB().collection('roles').insertOne(nuevoRol);
    res.status(201).json(nuevoRol);
}

async function obtenerRoles(req, res) {
    const roles = await getDB().collection('roles').find().toArray();
    res.json(roles);
}

module.exports = { crearRol, obtenerRoles };