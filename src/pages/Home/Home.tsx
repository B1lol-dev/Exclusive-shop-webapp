// api
import axios from "axios";
import { API_ENDPOINTS, API_URL } from "@/constants/api";
import { PRODUCTS_LIMIT } from "@/constants/products";

// utils
import { v4 as uuidv4 } from "uuid";

// hooks
import { useEffect, useState } from "react";

// components
import { Container } from "@/components/helpers/Container";
import { Header } from "../../components/layout/Header";
import { Swiper } from "./components/Swiper";
import { SectionTitle } from "./components/SectionTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/common/cards/ProductCard";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(PRODUCTS_LIMIT);

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.products}?limit=${productsLimit}`)
      .then((res) => {
        setProducts(res.data.products);
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
          </Container>
        </section>
      </main>
    </>
  );
};
