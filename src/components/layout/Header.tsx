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
import { Heart, Search, ShoppingCart } from "lucide-react";

export const Header = () => {
  const navLinks: Array<string> = ["home", "contact", "about", "sign in"];

  return (
    <>
      <SubHeader />
      <header className="pt-10 pb-4">
        <Container>
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-ex-black">
              Exlusive
            </Link>
            <ul className="flex text-ex-black text-base gap-12">
              {navLinks.map((link) => (
                <li
                  className="capitalize transition duration-200 hover:border-b-1 hover:border-b-gray-400"
                  key={uuidv4()}
                >
                  <Link to={link.split(" ").join("-")}>{link}</Link>
                </li>
              ))}
            </ul>
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
            <div className="flex items-center gap-4">
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
        <div></div>
        <h4 className="text-sm">
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
