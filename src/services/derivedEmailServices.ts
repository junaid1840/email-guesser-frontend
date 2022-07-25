import { IUserDetails } from "../types/user.types";
import { API_MANAGER } from "../api-manager/apiManager";

export const getDerivedEmailService = async (userDetails: IUserDetails) => {
    const { data } = await API_MANAGER.post("/", userDetails);
    return data;
};
