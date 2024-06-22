//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import { testPublication,  savePublication } from "../controllers/publications.js"
import { ensureAuth } from "../middlewares/auth.js";
// Definir las rutas

router.get('/test-publication', testPublication);
router.post('/publication', ensureAuth, savePublication);
// Exportar el Router
export default router;