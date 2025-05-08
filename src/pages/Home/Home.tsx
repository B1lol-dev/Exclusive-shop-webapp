// api
import axios from "axios";
import { API_ENDPOINTS, API_URL } from "@/constants/api";
import { PRODUCTS_LIMIT } from "@/constants/products";

// utils
import { v4 as uuidv4 } from "uuid";

// hooks
import { useEffect, useRef, useState } from "react";

// components
import { Container } from "@/components/helpers/Container";
import { Header } from "../../components/layout/Header";
import { Swiper } from "./components/Swiper";
import { SectionTitle } from "./components/SectionTitle";
import { ProductCard } from "@/components/common/cards/ProductCard";
import { ProductCardSkeleton } from "@/components/skeleton/cards/ProductCardSkeleton";

// icons
import { ArrowLeft, ArrowRight } from "lucide-react";

// assets
import ps5_img from "./assets/grid/ps5.png";
import women_img from "./assets/grid/woman.png";
import speakers_img from "./assets/grid/speakers.png";
import parfume_img from "./assets/grid/parfume.png";
import { Footer } from "@/components/layout/Footer";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(PRODUCTS_LIMIT);
  const productsSkeletonWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.products}?limit=${productsLimit}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .finally(() => {
        productsSkeletonWrapper.current?.classList.add("hidden");
      });
  }, [productsLimit]);

  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Swiper />
          </Container>
        </section>
        <section className="pt-[63px]">
          <Container>
            <SectionTitle text="Our Products" />
            <div className="flex w-full justify-end items-center mt-[22px] gap-2">
              <button
                type="button"
                className="bg-ex-light-gray rounded-full p-[11px]"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                type="button"
                className="bg-ex-light-gray rounded-full p-[11px]"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            <div className="grid grid-cols-4 justify-items-center gap-x-[30px] gap-y-[60px] mt-[60px] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {products.map((product) => (
                <ProductCard data={product} key={uuidv4()} />
              ))}
            </div>
            <div
              className="grid grid-cols-4 justify-items-center gap-x-[30px] gap-y-[60px] mt-[60px] max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
              ref={productsSkeletonWrapper}
            >
              {Array(PRODUCTS_LIMIT)
                .fill("")
                .map(() => (
                  <ProductCardSkeleton key={uuidv4()} />
                ))}
            </div>
            <button
              type="button"
              className="bg-ex-red text-ex-white font-medium text-base px-12 py-4 rounded-md block mx-auto mt-[76px]"
              onClick={() => {
                productsSkeletonWrapper.current?.classList.remove("hidden");
                setProductsLimit((prev) => prev + PRODUCTS_LIMIT);
              }}
            >
              See more
            </button>
          </Container>
        </section>
        <section className="pb-[56px]">
          <Container>
            <SectionTitle text="Featured" />
            <h1 className="mt-5 text-ex-black font-semibold text-4xl">
              New Arrival
            </h1>
            <div className="grid h-[600px]! mt-[60px] grid-cols-4 grid-rows-2 gap-8 max-xl:hidden">
              <div className="bg-ex-black-sc row-start-1 row-end-3 col-start-1 col-end-3 overflow-hidden flex items-end justify-center relative group">
                <img src={ps5_img} alt="playstation 5" />
                <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-[120%] group-hover:translate-y-0">
                  <h4 className="text-ex-white-sc text-2xl font-semibold">
                    Playstation 5
                  </h4>
                  <p className="max-w-[242px] text-sm my-4">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a href="#" className="underline text-base font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="bg-ex-black-sc col-start-3 col-end-6 overflow-hidden flex items-center justify-end relative group">
                <img src={women_img} alt="woman" />
                <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-[120%] group-hover:translate-y-0">
                  <h4 className="text-ex-white-sc text-2xl font-semibold">
                    Women’s Collections
                  </h4>
                  <p className="max-w-[242px] text-sm my-4">
                    Featured woman collections that give you another vibe.
                  </p>
                  <a href="#" className="underline text-base font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="bg-ex-black-sc col-start-3 col-end-4 overflow-hidden flex items-center justify-center relative group">
                <img src={speakers_img} alt="speakers" />
                <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-[130%] group-hover:translate-y-0">
                  <h4 className="text-ex-white-sc text-2xl font-semibold">
                    Speakers
                  </h4>
                  <p className="max-w-[242px] text-sm my-4">
                    Amazon wireless speakers
                  </p>
                  <a href="#" className="underline text-base font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="bg-ex-black-sc col-start-4 col-end-6 overflow-hidden flex items-center justify-center relative group">
                <img src={parfume_img} alt="parfume" />
                <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-[130%] group-hover:translate-y-0">
                  <h4 className="text-ex-white-sc text-2xl font-semibold">
                    Perfume
                  </h4>
                  <p className="max-w-[242px] text-sm my-4">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a href="#" className="underline text-base font-medium">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <MobileGrid />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

function MobileGrid() {
  return (
    <div className="hidden mt-[60px] gap-8 max-xl:flex flex-col">
      <div className="bg-ex-black-sc overflow-hidden flex items-end justify-center relative group">
        <img src={ps5_img} alt="playstation 5" />
        <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-0">
          <h4 className="text-ex-white-sc text-2xl font-semibold">
            Playstation 5
          </h4>
          <p className="max-w-[242px] text-sm my-4">
            Black and White version of the PS5 coming out on sale.
          </p>
          <a href="#" className="underline text-base font-medium">
            Shop Now
          </a>
        </div>
      </div>
      <div className="bg-ex-black-sc overflow-hidden flex items-center justify-end relative group">
        <img src={women_img} alt="woman" />
        <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-0">
          <h4 className="text-ex-white-sc text-2xl font-semibold">
            Women’s Collections
          </h4>
          <p className="max-w-[242px] text-sm my-4">
            Featured woman collections that give you another vibe.
          </p>
          <a href="#" className="underline text-base font-medium">
            Shop Now
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-8 max-sm:flex-col">
        <div className="bg-ex-black-sc w-[50%] h-[300px] overflow-hidden flex items-center justify-center relative group max-sm:w-full">
          <img src={speakers_img} alt="speakers" />
          <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-0">
            <h4 className="text-ex-white-sc text-2xl font-semibold">
              Speakers
            </h4>
            <p className="max-w-[242px] text-sm my-4">
              Amazon wireless speakers
            </p>
            <a href="#" className="underline text-base font-medium">
              Shop Now
            </a>
          </div>
        </div>
        <div className="bg-ex-black-sc w-[50%] h-[300px] overflow-hidden flex items-center justify-center relative group max-sm:w-full">
          <img src={parfume_img} alt="parfume" />
          <div className="text-ex-white absolute left-8 bottom-8 transition duration-300 translate-y-0">
            <h4 className="text-ex-white-sc text-2xl font-semibold">Perfume</h4>
            <p className="max-w-[242px] text-sm my-4">GUCCI INTENSE OUD EDP</p>
            <a href="#" className="underline text-base font-medium">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
