import { CrearService } from "../services/crear.service.js";

export async function crearService(req, res) {
  // TODO: hacer el dto

  const result = await CrearService.crearService(req.body, req.user);

  return res.status(result.message ? 400 : 201).json(result);
}

export async function listarUsuario(req, res) {
  const result = await CrearService.listaDelUsuario(req.user);

  return res.json(result);
}

// TODO: implementar el update y delete
