// components
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/helpers/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container className="flex flex-col items-center justify-center py-3">
            <img
              src="https://media.tenor.com/h4JqqXe5sB8AAAAe/android-bugdroid.png"
              alt="Sad Android"
            />
            <h1 className="text-5xl font-bold">404</h1>
            <p className="text-xl mt-2">
              The page you looking for is not found.
            </p>
            <Link to="/" className="mt-2">
              <button
                type="button"
                className="text-ex-white bg-ex-red py-2 px-5 rounded-md"
              >
                Go to Home
              </button>
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
