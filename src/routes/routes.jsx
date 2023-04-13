import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminCategories from '../components/AdminCategories';
import AdminNewCategory from '../components/AdminNewCategory';
import AdminNewProduct from '../components/AdminNewProduct';
import AdminOrders from '../components/AdminOrders';
import AdminProducts from '../components/AdminProducts';
import Admin from '../pages/Admin';
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
        <Route element={<Admin />}>
          <Route path="/admin-pedidos" element={<AdminOrders />} />
          <Route path="/admin-produtos" element={<AdminProducts />} />
          <Route path="/admin-categorias" element={<AdminCategories />} />
          <Route path="/admin-novo-produto" element={<AdminNewProduct />} />
          <Route path="/admin-nova-categoria" element={<AdminNewCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
