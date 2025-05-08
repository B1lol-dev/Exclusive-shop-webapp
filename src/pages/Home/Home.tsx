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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/common/cards/ProductCard";
import { ProductCardSkeleton } from "@/components/skeleton/cards/ProductCardSkeleton";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(PRODUCTS_LIMIT);
  const productsSkeletonWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.products}?limit=${productsLimit}`)
      .then((res) => {
        setProducts(res.data.products);
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
            <div className="grid grid-cols-4 justify-items-center gap-x-[30px] gap-y-[60px] mt-[60px]">
              {products.map((product) => (
                <ProductCard data={product} key={uuidv4()} />
              ))}
            </div>
            <div
              className="grid grid-cols-4 justify-items-center gap-x-[30px] gap-y-[60px] mt-[60px]"
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
                setProductsLimit((prev) => prev);
              }}
            >
              See more
            </button>
          </Container>
        </section>
        <section className="">
          <Container>
            <SectionTitle text="Featured" />
            <h1 className="mt-5 text-ex-black font-semibold text-4xl">
              New Arrival
            </h1>
            <div className="grid h-[600px] mt-60 grid-cols-4 grid-rows-2 gap-8">
              <div className="bg-ex-black row-start-1 row-end-3 col-start-1 col-end-3"></div>
              <div className="bg-ex-black col-start-3 col-end-6"></div>
              <div className="bg-ex-black col-start-3 col-end-4"></div>
              <div className="bg-ex-black col-start-4 col-end-6"></div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};
