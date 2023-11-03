import User from '../models/user.js' 

class UserController {
    constructor() { }

    createUser = async (req, res, next) => {
        try {
            const { name, surname, email, password } = req.body;

            const nuevoUsuario = new User({
                name,
                surname,
                email,
                password,
            });
        
            // Guarda el usuario en la base de datos
            const usuarioGuardado = await nuevoUsuario.save();
        
            // Responde con el usuario recién creado
            res.status(201).json(usuarioGuardado);
            console.log('se guardo el usuario:', nuevoUsuario)
        } catch (error) {
            console.error('Error al crear un usuario:', error);
            res.status(500).json({ error: 'Error al crear un usuario' });
        }
      };
}
 
export default UserController