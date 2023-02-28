import axios from "axios";
import { toast } from "./toasts";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getTokens = () => {
  const token = localStorage.getItem("tokens");
  if (token) {
    return JSON.parse(token);
  }

  return null;
};

client.interceptors.request.use((api) => {
  const token = getTokens();

  if (!token) {
    localStorage.removeItem("tokens");
    return api;
  }

  api.headers.Authorization = `Bearer ${token.accessToken}`;

  return api;
});

client.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status >= 500) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }

    if (error.response.status === 400 && error.response.data.action === "INVALID_PAYLOAD") {
      const errors = error.response.data.errors.map(
        (item: any) => `${item.FailedFields.split(".")[1]} is ${item.Tag}`
      );

      toast({
        title: "Error sending data",
        description: "Please check the fields and try again: " + errors.join(", "),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }

    if (error.response.status === 401) {
      const token = getTokens();

      if (!token) {
        localStorage.removeItem("tokens");
        return Promise.reject(error);
      }

      try {
        const result = await client.post("/auth/refresh", { refreshToken: token.refreshToken });
        localStorage.setItem("tokens", JSON.stringify(result.data));
      } catch (err) {
        localStorage.removeItem("tokens");
      }
    }

    return Promise.reject(error);
  }
);

export default client;
