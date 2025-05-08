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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
