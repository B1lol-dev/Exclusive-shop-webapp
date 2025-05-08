// components
import { Container } from "@/components/helpers/Container";
import { Header } from "../../components/layout/Header";
import Swiper from "./components/Swiper";
import { SectionTitle } from "./components/SectionTitle";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Home = () => {
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
            <div className="grid grid-cols-4 justify-items-center"></div>
          </Container>
        </section>
      </main>
    </>
  );
};
