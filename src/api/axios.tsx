import axios from "axios";

export const  Req = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`,
})