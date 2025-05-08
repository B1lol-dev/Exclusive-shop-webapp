// components
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/helpers/Container";
import { useNavigate } from "react-router-dom";

// utils
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { API_ENDPOINTS, API_URL } from "@/constants/api";

// hooks
import { useState } from "react";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_URL}/${API_ENDPOINTS.auth}/login`,
        {
          username: email,
          password,
        }
      );

      const userResponse = await axios.get(
        `${API_URL}/${API_ENDPOINTS.users}/${response.data.id}`
      );

      if (userResponse.data.role == "admin") {
        localStorage.setItem("adminToken", response.data.accessToken);
        localStorage.setItem("admin", JSON.stringify(response.data));
        navigate("/admin");
      }
    } catch (e) {
      console.log(e);
      toast.error("Invalid username or password");
    }
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="flex items-center justify-center gap-[129px] py-40">
            <form onSubmit={(e) => handleLogin(e)}>
              <h1 className="font-medium text-4xl">Admin Dashboard</h1>
              <p className="text-base mt-6">Enter your details below</p>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="mt-12 w-full py-2 border-b-1 border-ex-black outline-none user-invalid:border-red-500"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="mt-10 w-full py-2 border-b-1 border-ex-black outline-none user-invalid:border-red-500"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="mt-10 flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-ex-red text-ex-white text-base font-medium px-12 py-4 rounded-md w-full"
                >
                  Log In
                </button>
              </div>
            </form>
          </Container>
        </section>
      </main>
      <Toaster />
      <Footer />
    </>
  );
};
