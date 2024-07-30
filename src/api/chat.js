import { get_prods } from "../../utils";

const uri = import.meta.env.VITE_APP_SERVER_URI;
export const ask = async (query,user_name,user_email,date) => {
  console.log("calling = " , `${uri}/ask?user_query=${query}`);

  const response = await fetch(
    `${uri}/ask?user_query=${query}&user_name=${user_name}&user_email=${user_email}&date=${date}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  const products = get_prods(data.response);
  console.log("received data = " , data);
  return {
    success: true,
    data: { message: data.response, products: products },
  };
};
