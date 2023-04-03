import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      api.get('/products').then((response) => setProducts(response.data));
    };
    const GetCategories = () => {
      api.get('/category').then((response) => setCategories(response.data));
    };
    getProducts();
    GetCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used with Productcontext');
  }
  return context;
};
