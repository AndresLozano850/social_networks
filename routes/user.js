//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import {register, testUser, login, profile, listUsers, updateUser} from "../controllers/user.js";
import {ensureAuth} from "../middlewares/auth.js"; // Middleware
// Definir las rutas para usuarlas

router.get('/test-user', ensureAuth, testUser);
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', ensureAuth, profile);
router.get('/list/:page?', ensureAuth, listUsers);
router.put('/update', ensureAuth, updateUser);
// Exportar el Router
export default router;
