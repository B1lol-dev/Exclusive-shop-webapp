// utils
import { v4 as uuidv4 } from "uuid";

// icons
import { Eye, Heart, Star } from "lucide-react";

export const ProductCardSkeleton = () => {
  return (
    <>
      <div>
        <div className="relative bg-ex-light-gray px-[40px] py-[35px] rounded-md">
          <div className="w-[190px] h-[180px]"></div>
          <div className="absolute flex flex-col top-3 right-3 gap-2">
            <button
              type="button"
              className="bg-ex-white p-[6px] rounded-full h-[34px] w-[34px] flex items-center justify-center"
            >
              <Heart size={22} />
            </button>
            <button
              type="button"
              className="bg-ex-white p-[6px] rounded-full h-[34px] w-[34px] flex items-center justify-center"
            >
              <Eye size={22} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="mt-4 h-3 w-50 bg-ex-black rounded-full opacity-70"></h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="bg-ex-red h-3 w-15 rounded-full"></p>
            <span className="flex items-center">
              {Array(5)
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
            <span className="bg-ex-black opacity-50 h-3 w-5 rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
};
