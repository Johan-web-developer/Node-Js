import {Router} from"express";

import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";
const router = Router();

router.get('/',categoriaController.getcategorias);
router.post('/',categoriaController.addCategories);
// ruta que recibe un parametro// 
router.get('/:id',categoriaController.getcategoria);
// RUTA DEBE RECIBIR COMO PARAMETRO EL ID DEL CATEGORIA A ELIMINAR
router.delete('/:id',categoriaController.deletecategoria); 
// ACTUALIZA//
router.put('/:id',categoriaController.updateCategories); 

export default router;