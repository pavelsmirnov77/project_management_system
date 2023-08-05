import axios from "axios";
import {setUser} from "../slices/userSlice";
import authHeader from "./authHeader";

const API_URL = "/users";

const getUser = (id, dispatch) => {
    return axios.get(API_URL + `/${id}`, {headers: authHeader()}).then(
        (response) => {
            dispatch(setUser(response.data));
        },
        (error) => {
            const _content = (error.response && error.response.data) ||
                error.message ||
                error.toString();

            console.error(_content)

            dispatch(setUser([]));
        });
};

const userService = {
    getUser
};

export default userService
