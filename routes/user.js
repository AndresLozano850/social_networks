//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import {testUser} from "../controllers/user.js"

// Definir las rutas

router.get('/test-user', testUser);

// Exportar el Router
export default router;