// shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// types
import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

// assets
import swiper_1_img from "../assets/swiper/swiper_1.png";

export default function Swiper() {
  return (
    <div className="w-full! mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <img
              src={swiper_1_img}
              alt="Slide 1"
              width={1200}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[344px] object-contain"
              style={{ aspectRatio: "1200/600", objectFit: "contain" }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/placeholder.svg"
              alt="Slide 2"
              width={1200}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[344px] object-contain"
              style={{ aspectRatio: "1200/600", objectFit: "contain" }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/placeholder.svg"
              alt="Slide 3"
              width={1200}
              height={600}
              className="w-full h-[250px] sm:h-[300px] lg:h-[344px] object-contain"
              style={{ aspectRatio: "1200/600", objectFit: "contain" }}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 text-foreground transition-colors">
          <ChevronLeftIcon className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 text-foreground transition-colors">
          <ChevronRightIcon className="w-6 h-6" />
        </CarouselNext>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-background/50 hover:bg-background/75 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-background/50 hover:bg-background/75 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-background/50 hover:bg-background/75 transition-colors" />
        </div>
      </Carousel>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
