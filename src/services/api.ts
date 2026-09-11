import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = () => api.get("/products?limit=20");
export const getProductById = (id: number) => api.get("/products/" + id);
export const loginApi = (username: string, password: string) => {
  return api.post("/auth/login", { username, password, expiresInMins: 30 });
};

export default api;
