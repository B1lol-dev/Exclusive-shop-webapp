import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// components
import { Container } from "../helpers/Container";

// shadcn components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// icons
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";

// hooks
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export const Header = () => {
  const navLinks: Array<string> = ["home", "contact", "about"];
  const [isSidebarShowing, setIsSidebarShowing] = useState<boolean>(false);

  const { isAuthenticated } = useAuth();

  return (
    <>
      <SubHeader />
      <header className="pt-10 pb-4">
        <Container>
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-ex-black">
              Exlusive
            </Link>
            <ul className="flex text-ex-black text-base gap-12 max-sm:hidden">
              {navLinks.map((link) => (
                <li
                  className="capitalize transition duration-200 hover:border-b-1 hover:border-b-gray-400"
                  key={uuidv4()}
                >
                  <Link to={`/${link.split(" ").join("-")}`}>{link}</Link>
                </li>
              ))}
              {isAuthenticated() ? (
                <li className="capitalize transition duration-200 hover:border-b-1 hover:border-b-gray-400">
                  <Link to={`/account`}>account</Link>
                </li>
              ) : (
                <li className="capitalize transition duration-200 hover:border-b-1 hover:border-b-gray-400">
                  <Link to={`/sign-in`}>sign in</Link>
                </li>
              )}
            </ul>
            <form className="flex items-center relative h-[38px] max-sm:hidden">
              <input
                type="search"
                className="text-sm bg-ex-light-gray rounded-l-md px-5 py-[5px] outline-none h-full"
                placeholder="What are you looking for?"
              />
              <button
                type="submit"
                className="bg-ex-light-gray rounded-r-md px-5 py-[5px] h-full"
              >
                <Search />
              </button>
            </form>
            <div className="flex items-center gap-4 max-sm:hidden">
              <Link to="/whishlist">
                <button type="button">
                  <Heart />
                </button>
              </Link>
              <Link to="/cart">
                <button type="button">
                  <ShoppingCart />
                </button>
              </Link>
            </div>
            <HeaderMobileSidebar
              isSidebarShowing={isSidebarShowing}
              setIsSidebarShowing={setIsSidebarShowing}
              navLinks={navLinks}
            />
            <button
              type="button"
              className="hidden max-sm:block"
              onClick={() => {
                setIsSidebarShowing((prev) => !prev);
              }}
            >
              <Menu />
            </button>
          </nav>
        </Container>
      </header>
    </>
  );
};

function SubHeader() {
  return (
    <div className="w-full bg-ex-black text-ex-white-sc py-4">
      <Container className="flex items-center justify-between">
        <div className="max-sm:hidden"></div>
        <h4 className="text-sm max-sm:hidden">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className="font-semibold ml-2">
            ShopNow
          </a>
        </h4>
        <Select defaultValue="en">
          <SelectTrigger className="w-[120px] border-none outline-none flex justify-center *:last:size-8">
            <SelectValue placeholder="Language" className="text-sm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ru">Русский</SelectItem>
            <SelectItem value="uzb">O'zbekcha</SelectItem>
          </SelectContent>
        </Select>
      </Container>
    </div>
  );
}

function HeaderMobileSidebar({
  navLinks,
  isSidebarShowing,
  setIsSidebarShowing,
}: {
  navLinks: Array<string>;
  isSidebarShowing: boolean;
  setIsSidebarShowing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`hidden max-sm:flex flex-col gap-7 fixed top-0 left-0 bg-ex-white h-screen p-8 transition duration-300 ${
        isSidebarShowing ? "translate-x-[0%]" : "translate-x-[-100%]"
      }`}
    >
      <form className="flex items-center relative h-[38px]">
        <input
          type="search"
          className="text-sm bg-ex-light-gray rounded-l-md px-5 py-[5px] outline-none h-full"
        />
        <button
          type="submit"
          className="bg-ex-light-gray rounded-r-md px-5 py-[5px] h-full"
        >
          <Search />
        </button>
      </form>
      <ul className="flex text-ex-black text-base gap-8 flex-col items-center">
        {navLinks.map((link) => (
          <li
            className="text-xl capitalize transition duration-200 hover:border-b-1 hover:border-b-gray-400"
            key={uuidv4()}
          >
            <Link to={link.split(" ").join("-")}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 flex-col">
        <Link to="/whishlist">
          <button type="button">
            <Heart />
          </button>
        </Link>
        <Link to="cart">
          <button type="button">
            <ShoppingCart />
          </button>
        </Link>
      </div>
      <button
        type="button"
        className="mx-auto"
        onClick={() => setIsSidebarShowing(false)}
      >
        <X size={30} />
      </button>
    </div>
  );
}
