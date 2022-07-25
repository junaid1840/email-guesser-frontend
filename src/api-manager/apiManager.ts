import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    responseType: "json",
    validateStatus: (status: number) => status >= 200,
    headers: {
        "Content-type": "application/json",
        locale: "en",
    },
});
export const API_MANAGER = {
    get: async (
        url: string,
        baseURL = process.env.REACT_APP_BASE_URL
    ): Promise<AxiosResponse> => {
        try {
            return axiosInstance({
                method: "GET",
                url: url,
                baseURL: baseURL,
            });
        } catch (e) {
            throw new Error(e as string);
        }
    },
};