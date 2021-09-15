import axios from "axios";

class AuthService {
    loginUser(email: string, password: string) {
        let params = new URLSearchParams();
        params.append("email", email);
        params.append("password", password);
        const url = "http://localhost:9000/login";

        const options = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials: true,
        
        };

        return axios.post(url, params, options);
    }
}

export default new AuthService();
