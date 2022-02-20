import { createContext } from "react";
import { useMemo } from "react";

export const AxiosContext = createContext();

export const AxiosProvider = ({
    children,
  }) => {
    const axios = useMemo(() => {
      const axios = axios.create({
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      axios.interceptors.request.use((config) => {
        // Read token for anywhere, in this case directly from localStorage
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
  
        return config;
      });
  
      return axios;
    }, []);
  
    return (
      <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
    );
  }