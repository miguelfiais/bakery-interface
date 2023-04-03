import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './hooks/CartContext';
import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <MyRoutes />
    </CartProvider>
    <GlobalStyles />
  </React.StrictMode>
);
