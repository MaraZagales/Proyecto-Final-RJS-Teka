import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Checkout from "./pages/CheckOut";
import Error from "./pages/Error";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route
            path="/productos"
            element={<ItemListContainer title="Nuestros Productos" />}
          />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
