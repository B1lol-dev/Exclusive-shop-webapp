import { ProductCard } from "@/components/common/cards/ProductCard";
import { Container } from "@/components/helpers/Container";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductCardSkeleton } from "@/components/skeleton/cards/ProductCardSkeleton";
import { API_ENDPOINTS, API_URL } from "@/constants/api";
import { PRODUCTS_LIMIT } from "@/constants/products";
import axios from "axios";
import { useEffect, useRef, useState, type SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const Category = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(PRODUCTS_LIMIT);
  const productsSkeletonWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get(
        `${API_URL}/${API_ENDPOINTS.products}/category/${params.name}?limit=0`
      )
      .then((res: { data: { products: SetStateAction<never[]> } }) => {
        setProducts(res.data.products);
      })
      .finally(() => {
        productsSkeletonWrapper.current?.classList.add("hidden");
      });
  }, [productsLimit, params.name]);

  return (
    <>
      <Header />
      <main>
        <section className="py-[63px]">
          <Container>
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
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
