import axios from "axios";
import { BASE_URL, YTD_API_KEY } from "../components/constants";

export default axios.create({
    baseURL: BASE_URL,
    params: {
        part: "snippet",
        maxResults: 5,
        key: YTD_API_KEY
    }
})