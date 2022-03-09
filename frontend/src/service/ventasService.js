import axios from "axios";

const URL = `${process.env.REACT_APP_WEBSITE_NAME}ventas`;

const guardarVenta = async (nuevaVenta) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(URL, nuevaVenta, { headers });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { guardarVenta };
