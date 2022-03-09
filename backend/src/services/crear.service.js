import { Lista } from "../models/lista.model.js";
import { Usuario } from "../models/usuario.model.js";

export class CrearService {
  static async crearService(data, usuarioId) {
    try {
      const usuario = await Usuario.findById(usuarioId);
      if (!usuario) {
        throw new Error("Usuario no existe");
      }

      const result = await Lista.create({ ...data, usuarioId });

      return result;
    } catch (e) {
      if (e instanceof Error) {
        return {
          message: "Error al crear la tarea",
          content: e.message,
        };
      }
    }
  }

  static async listaDelUsuario(usuarioId) {
    console.log(usuarioId);
    const result = await Lista.find({ usuarioId });

    return result;
  }
}
