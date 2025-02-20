// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./api/routes/authRoutes');  // Ruta de las rutas de autenticación

app.use(cors());
app.use(bodyParser.json());

// Enlazamos la ruta 'api/auth' con las rutas definidas en 'authRoutes.js'
app.use('/api/auth', authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
