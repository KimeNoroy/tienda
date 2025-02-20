const pool = require('../../config/db');  // Importamos la conexión

const login = async (req, res) => {
  const { correo_administrador, contraseña_administrador } = req.body;

  try {
    //Esta línea es clave: la consulta devuelve una promesa
    const [rows] = await pool.query('SELECT * FROM tb_administrador WHERE correo_administrador = ?', [correo_administrador]);

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const usuario = rows[0]; // Tomamos el primer usuario encontrado

    // Comparamos directamente las contraseñas sin encriptar
    if (usuario.contraseña_administrador === contraseña_administrador) {
      return res.json({ message: 'Inicio de sesión exitoso', token: 'tu_token_jwt_aqui' });
    } else {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

  } catch (error) {
    return res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

module.exports = { login };
