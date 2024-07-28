import {UserLogin, UserLoginResponse, UserRegister, UserResponse} from "../types/user.type";
import axiosDefault from "../utils/axiosConfig";
import {ApiRoutes} from "../utils/apiRoutes";

export const UserService = {
    login: async (user: UserLogin): Promise<UserLoginResponse> => {
        const response = await axiosDefault.post(ApiRoutes.LOGIN, user);
        return response.data;
    },

    register: async (user: UserRegister): Promise<UserResponse> => {
        const response = await axiosDefault.post(ApiRoutes.REGISTER, user);
        return response.data;
    }
}