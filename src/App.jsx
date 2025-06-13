import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Order from "./Pages/Order";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/orders" element={<Order />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
