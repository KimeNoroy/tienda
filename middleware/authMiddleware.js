const jwt = require('jsonwebtoken');
const JWT_SECRET = 'tu_clave_secreta';

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Acceso denegado. No se ha proporcionado token');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded; // Decodifica la información del token
    next(); // Continúa con la siguiente función
  } catch (err) {
    return res.status(400).send('Token inválido');
  }
};
