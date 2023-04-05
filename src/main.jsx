import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './hooks/CartContext';
import { ProductProvider } from './hooks/ProductContext';
import { UserProvider } from './hooks/UserContext';
import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <MyRoutes />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
    <GlobalStyles />
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);
