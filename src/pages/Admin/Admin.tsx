// hooks
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/helpers/Container";
import { Footer } from "@/components/layout/Footer";

export const Admin = () => {
  const { isAdmin, admin } = useAuth();
  const navigate = useNavigate();
  const [isIAdmin, setIsIAdmin] = useState(false);

  isAdmin()
    .then((res) => {
      console.log(res);
      setIsIAdmin(true);
    })
    .catch((e) => {
      console.error(e);
      setIsIAdmin(false);
      navigate("/admin/login");
    });

  const paths = location.pathname.split("/");

  return (
    isIAdmin && (
      <>
        <Header />
        <main>
          <section>
            <Container>
              <div className="flex w-full justify-between items-center">
                <div>
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
                <p>
                  Welcome!{" "}
                  <span className="text-ex-red">{admin.firstName}</span>
                </p>
              </div>
              <h1 className="text-[40px] font-medium my-20 mb-50">
                Admin panel
              </h1>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    )
  );
};
