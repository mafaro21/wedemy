import axios from "axios";
import http from '../axiosconfig';

class AuthService {
    loginUser(email: string, password: string) {
        const url = "http://localhost:9000/auth/statuslogin";

        const options = {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            withCredentials: true,
            auth: {
                username: email,
                password: password
            }
        };

        return axios.post(url, null, options);
    }

    logoutUser() {
        return http.post("/logout")
    }


    registerUser(email: string, fullname: string, password: string, confirmPass: string) {
        return http.post("/auth/register", {
            fullname,
            email,
            password,
            confirmPass
        })
    }
}

export default new AuthService();
