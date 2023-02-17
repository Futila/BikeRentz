import { saveAuthToLocalStorage } from "../helpers/local-storage";
import { UserLoginType } from "../typescript/user";
import { api } from "./api";

export const login = async (data: UserLoginType) => {
  try {
    const response = await api.post("/login", {
      ...data,
    });

    saveAuthToLocalStorage(response.data.accessToken, response.data.user);
    return {
      status: 201,
      msg: response.data,
    };
  } catch (error: any) {
    return {
      status: 400,
      msg: error.response.data,
    };
  }
};
