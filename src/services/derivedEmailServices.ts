import { IUserDetails } from "../types/user.types";
import { API_MANAGER } from "../api-manager/apiManager";

export const getDerivedEmailService = async ({firstName, lastName, domain}: IUserDetails) => {
    const url = `/?firstName=${firstName}&lastName=${lastName}&domain=${domain}`
    const { data } = await API_MANAGER.get(url);
    return data;
};
