import { API_URL, API_ENDPOINTS } from "@/constants/api";
import axios from "axios";

export const useAuth = () => {
  const adminToken = localStorage.getItem("adminToken");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")!);

  const isAuthenticated = () => {
    if (token && user) {
      return true;
    } else {
      localStorage.clear();
    }
  };

  const isAdmin = async () => {
    const adminToken = localStorage.getItem("adminToken");
    if (!adminToken) return false;

    try {
      const res = await axios.get(`${API_URL}/${API_ENDPOINTS.users}`);
      const isValidAdmin = res.data.some(
        (user: { role: string; accessToken: string }) =>
          user.role === "admin" && user.accessToken === adminToken
      );
      return isValidAdmin;
    } catch (error) {
      console.error("Error verifying admin token:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  return { isAuthenticated, isAdmin, user, logout, token, adminToken };
};
