import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
