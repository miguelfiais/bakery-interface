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

  const deleteFromCart = async (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    await localStorage.setItem('bakeryCart', JSON.stringify(newCart));
  };

  const increaseProducts = async (id) => {
    const newCart = cart.map((prd) => {
      return prd.id === id ? { ...prd, quantity: prd.quantity + 1 } : prd;
    });
    setCart(newCart);
    await localStorage.setItem('bakeryCart', JSON.stringify(newCart));
  };

  const decreaseProducts = async (id) => {
    const cartIndex = cart.findIndex((prd) => prd.id === id);
    if (cart[cartIndex].quantity > 1) {
      const newCart = cart.map((prd) => {
        return prd.id === id ? { ...prd, quantity: prd.quantity - 1 } : prd;
      });
      setCart(newCart);
      await localStorage.setItem('bakeryCart', JSON.stringify(newCart));
    } else {
      deleteFromCart(id);
    }
  };

  const clearCart = () => {
    localStorage.removeItem('bakeryCart');
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        deleteFromCart,
        increaseProducts,
        decreaseProducts,
        clearCart,
      }}
    >
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
