import axios from "axios";

const API_URL = "/api/auth/";

const register = (registration) => {
    const {username, login, email, description, password} = registration;
    return axios.post(API_URL + "signup", {
            username,
            login,
            email,
            description,
            password
        },
    );
};

const login = (info) => {
    const {login, password} = info;

    return axios
        .post(API_URL + "signin", {
            login,
            password,
        })
        .then((response) => {
            console.log(response)
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    console.log("logout")
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;