import { get_prods } from "../../utils";

const uri = import.meta.env.VITE_APP_SERVER_URI;
export const ask = async (query) => {
    // console.log("calling = " , `${uri}/ask?user_query=${query}`);

    // console.log("user =======================" , user);
    // console.log("user name" , user.user.fullName);
    // console.log("email" , user.user.primaryEmailAddress.emailAddress);
    // console.log("date" , user.user.lastSignInAt.getDate());
    // console.log("month" , user.user.lastSignInAt.getMonth()+1);
    const response = await fetch(`${uri}/ask?user_query=${query}`, {
        method: "POST"
    });
    const data = await response.json();
    const products = get_prods(data.response);
    // console.log("received data = " , data);
    return {success: true, data: {message: data.response, products: products}};
}