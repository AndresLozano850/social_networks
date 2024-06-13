//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import {register, testUser} from "../controllers/user.js"

// Definir las rutas para usuarlas

router.get('/test-user', testUser);
router.post('/register', register);

// Exportar el Router
export default router;
