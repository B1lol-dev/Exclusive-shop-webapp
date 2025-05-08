// hooks
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/helpers/Container";
import { Footer } from "@/components/layout/Footer";

export const Admin = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  isAdmin()
    .then((res) => {
      console.log(res);
      setAdmin(true);
    })
    .catch((e) => {
      console.error(e);
      setAdmin(false);
      navigate("/admin/login");
    });

  return (
    admin && (
      <>
        <Header />
        <main>
          <section>
            <Container>
              <h1>Welcome Admin</h1>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    )
  );
};
