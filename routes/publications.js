//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import {testPublication} from "../controllers/publications.js"

// Definir las rutas

router.get('/test-publication', testPublication);

// Exportar el Router
export default router;