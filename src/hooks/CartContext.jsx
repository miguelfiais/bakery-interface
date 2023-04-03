import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartStorage = async () => {
      const cartStorage = await localStorage.getItem('bakeryCart');
      cartStorage && setCart(JSON.parse(cartStorage));
    };
    getCartStorage();
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with Cartcontext');
  }
  return context;
};
