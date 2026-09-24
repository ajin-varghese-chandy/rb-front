import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
    timeout: 5000,
})

axiosInstance.interceptors.response.use(
    (response) => {
        console.log('API Response Recieved !!!');
        return response

    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            if (status === 401) {
                console.log('Unautharized Access  - Redirect to Login Page');

            } else if (status === 404) {
                console.log('API Not found');

            } else if (status === 500) {
                console.log('Somthing went wrong ... try again later !!!');

            } else if (error.request) {
                console.log('No response from server ');

            } else {
                console.log('Error' + error.message);

            }

            return Promise.reject(error)
        }
    }
)

export default axiosInstance 