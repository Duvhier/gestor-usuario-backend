const express = require('express');
const cors = require('cors');
const app = express();
const rolesRoutes = require('./routes/rolesRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const { connectDB } = require('./database/db');

// Configuración de CORS más específica
app.use(cors({
    origin: 'http://localhost:5173', // Puerto por defecto de Vite
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/roles', rolesRoutes);
app.use('/users', usuariosRoutes);

const PORT = process.env.PORT || 5000;

// Iniciar el servidor después de conectar a la base de datos
async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}

startServer();
