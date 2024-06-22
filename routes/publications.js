//Importaciones de Express Router Ayuda para la utilizacion de los metodos de express
import { Router } from "express";
const router = Router();
import { testPublication,  savePublication, showPublication } from "../controllers/publications.js"
import { ensureAuth } from "../middlewares/auth.js";
// Definir las rutas

router.get('/test-publication', testPublication);
router.post('/publication', ensureAuth, savePublication);
router.get('/show-publication/:id', ensureAuth, showPublication);

// Exportar el Router
export default router;