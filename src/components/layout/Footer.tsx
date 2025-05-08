import { Link } from "react-router-dom";

// components
import { Container } from "../helpers/Container";

// icons
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

// assets
import get_playmarket_img from "@/assets/get_playmarket.png";
import get_appstore_img from "@/assets/get_appstore.png";

export const Footer = () => {
  return (
    <footer className="block! w-full bg-ex-black">
      <Container>
        <div className="flex pt-[80px] pb-[60px] gap-[87px] max-xl:grid max-xl:grid-cols-2 max-xl:justify-items-center max-lg:flex max-lg:flex-col max-lg:items-center">
          <ul className="text-ex-white flex flex-col items-start gap-6 max-xl:items-center">
            <Link to="/">
              <h1 className="font-bold text-2xl">Exclusive</h1>
            </Link>
            <Link to="#">
              <h2 className="text-xl font-semibold">Subscribe</h2>
            </Link>
            <form className="relative h-12 w-[217px]">
              <label>
                <p className="text-base">Get 10% off your first order</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-base outline-none border-1 border-ex-white rounded-md px-4 py-3 mt-4 w-full user-invalid:border-ex-red"
                  required
                />
              </label>
              <button
                type="submit"
                className="rotate-45 absolute right-[15px] top-[140%] -translate-y-[50%]"
              >
                <Send color="white" />
              </button>
            </form>
          </ul>
          <ul className="text-ex-white flex flex-col items-start gap-4 max-w-[175px] max-xl:items-center">
            <h3 className="font-semibold text-xl">Support</h3>
            <li>
              <a href="#">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</a>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="tel:+88015888889999">+88015-88888-9999</a>
            </li>
          </ul>
          <ul className="text-ex-white flex flex-col items-start gap-4 max-w-[123px] max-xl:items-center *:text-nowrap">
            <h3 className="font-semibold text-xl">Account</h3>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/sign-in">Login / Register</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/whishlist">Whishlist</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="text-ex-white flex flex-col items-start gap-4 max-w-[109px] max-xl:items-center *:text-nowrap">
            <h3 className="font-semibold text-xl">Quick Link</h3>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-use">Terms Of Use</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="text-ex-white flex flex-col items-start">
            <h3 className="font-semibold text-xl">Download App</h3>
            <p className="text-ex-white-sc opacity-70 text-xs mt-6">
              Save $3 with App New User Only
            </p>
            <div className="mt-2 flex gap-[11px] items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png"
                alt="scan me"
                className="size-[76px]"
              />
              <div className="flex flex-col gap-[9px]">
                <a href="#">
                  <img src={get_playmarket_img} alt="Get it on playmarket" />
                </a>
                <a href="#">
                  <img src={get_appstore_img} alt="Get it on app store" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 max-w-[168px] mt-6">
              <a href="#">
                <Facebook color="none" fill="white" />
              </a>
              <a href="#">
                <Twitter color="white" />
              </a>
              <a href="#">
                <Instagram color="white" />
              </a>
              <a href="#">
                <Linkedin color="none" fill="white" />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-4 flex items-center justify-center opacity-40 border-t-1 border-ex-white">
        <p className="text-base text-ex-white">
          ©Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
