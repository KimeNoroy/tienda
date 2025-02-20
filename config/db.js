const mysql = require('mysql2/promise'); // Asegúrate de que es 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Si tienes contraseña, agrégala aquí
  database: 'tiendadb'
});

module.exports = pool;
