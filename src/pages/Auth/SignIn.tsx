// components
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/helpers/Container";
import { Link, useNavigate } from "react-router-dom";

// assets
import phone_img from "./assets/phone.png";

// utils
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { API_ENDPOINTS, API_URL } from "@/constants/api";

// hooks
import { useState } from "react";

export const SignIn = () => {
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

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data));

      const userResponse = await axios.get(
        `${API_URL}/${API_ENDPOINTS.users}/${response.data.id}`
      );

      if (userResponse.data.role === "admin") {
        localStorage.setItem("adminToken", response.data.accessToken);
        localStorage.setItem("admin", JSON.stringify(response.data));
      }

      navigate("/");
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
          <Container className="flex items-center justify-center gap-[129px] max-xl:flex-col max-xl:pb-50">
            <div>
              <img src={phone_img} alt="Phone" />
            </div>
            <form onSubmit={(e) => handleLogin(e)}>
              <h1 className="font-medium text-4xl">Log in to Exclusive</h1>
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
                  className="bg-ex-red text-ex-white text-base font-medium px-12 py-4 rounded-md"
                >
                  Log In
                </button>
                <Link
                  to="/forgot-password"
                  className="text-ex-red text-base hover:underline"
                >
                  Forget Password?
                </Link>
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
