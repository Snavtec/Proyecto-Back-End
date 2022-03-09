import { Router } from "express";
import {
  crearService,
  listarUsuario,
} from "../controllers/crear.controller.js";
import { validarUsuario } from "../utils/validador.js";

export const listaRouter = Router();

listaRouter
  .route("/lista")
  .all(validarUsuario)
  .get(listarUsuario)
  .post(crearService);
