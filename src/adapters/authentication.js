import axios from "../adapters/axios";

const authentication = async () => {
  try {
    const { data } = await axios.get("/accounts/authentication", {
      credentials: "include",
    });
    console.log(data)
    return {
      isAuth: data.isAuthenticate,
      user: data.user,
    };
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export default authentication;
