import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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

  const deleteProduct = async (id) => {
    await toast.promise(api.delete(`/products/${id}`), {
      pending: 'Excluindo produto...',
      success: 'Produto deletado com sucesso',
      error: 'Falha ao excluir o produto',
    });
  };
  const deleteCategory = async (id) => {
    await toast.promise(api.delete(`/category/${id}`), {
      pending: 'Excluindo categoria...',
      success: 'categoria deletada com sucesso',
      error: 'Falha ao excluir a categoria',
    });
  };

  return (
    <ProductContext.Provider
      value={{ products, categories, deleteProduct, deleteCategory }}
    >
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
