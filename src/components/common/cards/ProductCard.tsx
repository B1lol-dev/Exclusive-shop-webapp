// hooks
import { useState } from "react";

// types
import type { IProductData } from "@/constants/interfaces";

// icons
import { Eye, Heart, Star, X } from "lucide-react";

// utils
import { v4 as uuidv4 } from "uuid";

// components
import { Link } from "react-router-dom";

export const ProductCard = ({ data }: { data: IProductData }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isPictureShowing, setIsPictureShowing] = useState<boolean>(false);

  const handleToggleWhishlist = () => {
    setIsLiked(!isLiked);
  };

  const handleShowPicture = () => {
    setIsPictureShowing((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        <Link to={`/product/${data.id}`} className="absolute inset-0"></Link>
        <div className="relative bg-ex-light-gray px-[40px] py-[35px] rounded-md">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-[190px] h-[180px]"
          />
          <div className="absolute flex flex-col top-3 right-3 gap-2">
            <button
              type="button"
              className="bg-ex-white p-[6px] rounded-full h-[34px] w-[34px] flex items-center justify-center"
              onClick={() => handleToggleWhishlist()}
            >
              <Heart
                size={22}
                fill={isLiked ? "var(--ex-red)" : "transparent"}
                color={isLiked ? "var(--ex-red)" : "black"}
              />
            </button>
            <button
              type="button"
              className="bg-ex-white p-[6px] rounded-full h-[34px] w-[34px] flex items-center justify-center"
              onClick={() => handleShowPicture()}
            >
              <Eye size={22} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="mt-4 text-base font-medium">{data.title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-ex-red text-base font-medium">${data.price}</p>
            <span className="flex items-center">
              {Array(Math.round(data.rating))
                .fill("")
                .map(() => (
                  <Star
                    size={16}
                    fill="var(--ex-yellow)"
                    color="var(--ex-yellow)"
                    key={uuidv4()}
                  />
                ))}
              {Array(5 - Math.round(data.rating))
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
            <span className="text-ex-black opacity-50 font-semibold text-sm">
              ({data.reviews.length})
            </span>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-10 w-full h-full top-0 left-0 flex items-center justify-center backdrop-brightness-50 ${
          !isPictureShowing && "hidden"
        }`}
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setIsPictureShowing((prev) => !prev);
          }
        }}
      >
        <div className="relative w-[80%] h-[80%] flex items-center justify-center p-5 bg-ex-light-gray">
          <button
            type="button"
            className="absolute top-5 right-5"
            onClick={() => setIsPictureShowing((prev) => !prev)}
          >
            <X className="cursor-pointer!" />
          </button>
          <img src={data.images[0]} alt={data.title} className="h-full" />
        </div>
      </div>
    </>
  );
};
