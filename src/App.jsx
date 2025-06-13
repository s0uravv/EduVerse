import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Order from "./Pages/Order";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ProductInfo from "./Pages/ProductInfo";
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
                <Route path="/signup" element={<SignUp />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/Product/:id" element={<ProductInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
