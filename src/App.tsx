import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// pages
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { NotFound } from "./pages/404/NotFound";
import { SignIn } from "./pages/Auth/SignIn";
import { Admin } from "./pages/Admin/Admin";
import { AdminLogin } from "./pages/Admin/AdminLogin";
import { Category } from "./pages/Category/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
