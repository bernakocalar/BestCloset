import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosinstance;
