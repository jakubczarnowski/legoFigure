import axios from "axios";
import { Envs } from "../shared";

export const axiosInstance = axios.create({
    baseURL: Envs.BASE_URL,
    headers: {
        Authorization: `key ${Envs.API_KEY}`,
        "Content-Type": "application/json",
    },
});
