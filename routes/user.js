//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import {register, testUser, login} from "../controllers/user.js";
import {ensureAuth} from "../middlewares/auth.js"; // Middleware
// Definir las rutas para usuarlas

router.get('/test-user', ensureAuth, testUser);
router.post('/register', register);
router.post('/login', login);

// Exportar el Router
export default router;
