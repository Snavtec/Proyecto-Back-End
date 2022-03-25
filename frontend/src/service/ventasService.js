import { AUTH_URL } from "./axiosService";

const guardarVenta = async (nuevaVenta) => {
  try {
    const { data } = await AUTH_URL.post("ventas/", nuevaVenta);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { guardarVenta };
