import { API_URL, API_ENDPOINTS } from "@/constants/api";
import axios from "axios";

export const useAuth = () => {
  const adminToken = localStorage.getItem("adminToken");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")!);
  const admin = JSON.parse(localStorage.getItem("admin")!);

  const isAuthenticated = () => {
    if (token && user) {
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  };

  const getAdmins = async () => {
    try {
      const res = await axios.get(`${API_URL}/${API_ENDPOINTS.users}`);

      const admins = res.data.users.filter((user: { role: string }) => {
        return user.role == "admin";
      });

      return admins;
    } catch (e) {
      console.error(e);
    }
  };

  const isAdmin = async () => {
    try {
      const res = await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      return res.data.role === "admin" ? true : false;
    } catch (e) {
      throw new Error(`Error: ${e}`);
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  return {
    isAuthenticated,
    isAdmin,
    user,
    logout,
    token,
    adminToken,
    getAdmins,
    admin,
  };
};
