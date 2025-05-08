// hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/helpers/Container";

// utils
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// constants
import { API_ENDPOINTS, API_URL } from "@/constants/api";

// types
import type { IProductData } from "@/constants/interfaces";

// icons
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";

export const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProductData>();

  const [color, setColor] = useState<string>("cyan");
  const [size, setSize] = useState<string>("m");
  const [count, setCount] = useState<number>(2);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [mainImage, setMainImage] = useState<string | undefined>(
    product?.images[0]
  );

  const paths = location.pathname.split("/");

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.products}/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.images[0]);
      });
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <section className="mt-[80px] mb-[94px]">
          <Container>
            <div className="text-base text-gray-500">
              {paths.map((path, index) => {
                const fullPath = paths.slice(0, index + 1).join("/");
                return (
                  <span key={index} className="last:text-ex-black">
                    <a
                      href={location.origin + `${fullPath}`}
                      className="hover:underline"
                    >
                      {path || "Home"}
                    </a>
                    {index < paths.length - 1 && " / "}
                  </span>
                );
              })}
            </div>
            <div className="mt-[80px] flex gap-[70px]">
              <div className="flex gap-[30px]">
                <ul className="flex flex-col gap-4">
                  {product?.images?.map((image: string | undefined) => (
                    <button
                      type="button"
                      className="bg-ex-light-gray px-3 py-6 flex items-center justify-center rounded-md h-[138px] w-[170px]!"
                      key={uuidv4()}
                      onClick={(e) =>
                        setMainImage(e.currentTarget.querySelector("img")!.src)
                      }
                    >
                      <img
                        src={image}
                        alt="image"
                        className="h-[121px] w-[114px]"
                      />
                    </button>
                  ))}
                </ul>
                <div className="h-[600px] w-[500px] bg-ex-light-gray flex items-center justify-center px-[27px]">
                  <img src={mainImage} alt={product?.title} />
                </div>
              </div>
              <div>
                <h1 className="text-ex-black font-semibold text-2xl">
                  {product?.title}
                </h1>
                <div className="mt-4 flex items-center">
                  <span className="flex">
                    {Array(Math.round(product?.rating || 0))
                      .fill("")
                      .map(() => (
                        <Star
                          size={16}
                          fill="var(--ex-yellow)"
                          color="var(--ex-yellow)"
                          key={uuidv4()}
                        />
                      ))}
                    {Array(5 - Math.round(product?.rating || 5))
                      .fill("")
                      .map(() => (
                        <Star
                          size={16}
                          fill="lightgray"
                          color="lightgray"
                          key={uuidv4()}
                        />
                      ))}
                  </span>
                  <span className="ml-2 text-ex-black opacity-50 text-sm">
                    ({product?.reviews.length} Reviews)
                  </span>
                  <span className="border-l-1 border-l-ex-black pl-2 ml-2">
                    {(product?.stock || 0) > 0 ? (
                      <p className="text-green-400">In Stock</p>
                    ) : (
                      <p className="text-red-500">Not In Stock</p>
                    )}
                  </span>
                </div>
                <h2 className="text-2xl mt-4">${product?.price.toFixed(2)}</h2>
                <p className="mt-6 max-w-[373px]">{product?.description}</p>
                <div className="w-full border-t-1 border-ex-black mt-6">
                  <h1 className="flex items-center gap-6 mt-6">
                    Colours:{" "}
                    <span className="flex items-center gap-2">
                      <button
                        type="button"
                        className={`size-5 rounded-full bg-[#A0BCE0] ${
                          color == "cyan" &&
                          "border-1 outline-1 border-ex-white outline-ex-black"
                        }`}
                        onClick={() => {
                          setColor("cyan");
                        }}
                      ></button>
                      <button
                        type="button"
                        className={`size-5 rounded-full bg-[#E07575] ${
                          color == "pink" &&
                          "border-1 outline-1 border-ex-white outline-ex-black"
                        }`}
                        onClick={() => {
                          setColor("pink");
                        }}
                      ></button>
                    </span>
                  </h1>
                  <h1 className="flex items-center gap-6 mt-6">
                    Size:{" "}
                    <span className="flex items-center gap-4">
                      <button
                        type="button"
                        className={`text-sm font-medium p-1.5 rounded-md border-1 border-[#00000080] size-8 flex items-center justify-center ${
                          size === "xs" &&
                          "bg-ex-red text-ex-white border-ex-red"
                        }`}
                        onClick={(e) => {
                          setSize(e.currentTarget.innerText.toLowerCase());
                        }}
                      >
                        XS
                      </button>
                      <button
                        type="button"
                        className={`text-sm font-medium p-1.5 rounded-md border-1 border-[#00000080] size-8 flex items-center justify-center ${
                          size === "s" &&
                          "bg-ex-red text-ex-white border-ex-red"
                        }`}
                        onClick={(e) => {
                          setSize(e.currentTarget.innerText.toLowerCase());
                        }}
                      >
                        S
                      </button>
                      <button
                        type="button"
                        className={`text-sm font-medium p-1.5 rounded-md border-1 border-[#00000080] size-8 flex items-center justify-center ${
                          size === "m" &&
                          "bg-ex-red text-ex-white border-ex-red"
                        }`}
                        onClick={(e) => {
                          setSize(e.currentTarget.innerText.toLowerCase());
                        }}
                      >
                        M
                      </button>
                      <button
                        type="button"
                        className={`text-sm font-medium p-1.5 rounded-md border-1 border-[#00000080] size-8 flex items-center justify-center ${
                          size === "l" &&
                          "bg-ex-red text-ex-white border-ex-red"
                        }`}
                        onClick={(e) => {
                          setSize(e.currentTarget.innerText.toLowerCase());
                        }}
                      >
                        L
                      </button>
                      <button
                        type="button"
                        className={`text-sm font-medium p-1.5 rounded-md border-1 border-[#00000080] size-8 flex items-center justify-center ${
                          size === "xl" &&
                          "bg-ex-red text-ex-white border-ex-red"
                        }`}
                        onClick={(e) => {
                          setSize(e.currentTarget.innerText.toLowerCase());
                        }}
                      >
                        XL
                      </button>
                    </span>
                  </h1>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-[44px] items-center border-2 border-[#00000080] rounded-md overflow-hidden w-[159px] justify-between">
                      <button
                        type="button"
                        className="h-full w-[41px] transition duration-200 text-2xl hover:bg-ex-red hover:text-ex-white border-r-2 border-[#00000080]"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        -
                      </button>
                      <h1>{count}</h1>
                      <button
                        type="button"
                        className="h-full w-[41px] transition duration-200 text-2xl hover:bg-ex-red hover:text-ex-white border-l-2 border-[#00000080]"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="h-[44px] bg-ex-red rounded-md text-ex-white max-w-[165px] w-full font-medium"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsLiked((prev) => !prev)}
                      className="h-[44px] p-2.5 rounded-md border-2 border-[#00000080] flex items-center justify-center"
                    >
                      <Heart
                        size={20}
                        color={!isLiked ? "black" : "var(--ex-red)"}
                        fill={!isLiked ? "none" : "var(--ex-red)"}
                      />
                    </button>
                  </div>
                  <div className="border-2 border-[#00000080] rounded-md mt-10">
                    <div className="flex items-center gap-4 pt-4 pb-6 pl-4 border-b-2 border-[#00000080]">
                      <Truck />
                      <div>
                        <h4 className="text-base font-semibold">
                          Free Delivery
                        </h4>
                        <p className="text-nowrap text-xs font-medium">
                          Enter your postal code for Delivery Availability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4 pb-6 pl-4">
                      <RefreshCcw />
                      <div>
                        <h4 className="text-base font-semibold">
                          Free Delivery
                        </h4>
                        <p className="text-nowrap text-xs font-medium">
                          Enter your postal code for Delivery Availability
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
