import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Products from '../pages/Products';
import Register from '../pages/Register';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/pedidos" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
