import { URL, AUTH_URL } from "./axiosService";

//buscar todos o filtrar
const login = async ({ email, password }) => {
  try {
    let { data } = await URL.post("auth/jwt/create/", { email, password });
    return data;
  } catch (error) {
    throw error;
  }
};

const createAccount = async ({ first_name, last_name, email, password }) => {
  try {
    let { data } = await URL.post("auth/users/", {
      first_name,
      last_name,
      email,
      password,
      re_password: password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const getUserProfile = async () => {
  try {
    let { data } = await AUTH_URL.get("auth/users/me/");
    return data;
  } catch (error) {
    throw error;
  }
};

export { login, createAccount, getUserProfile };
