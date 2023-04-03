import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import CardProduct from '../CardProduct';
import { AllProducts, NavCategory } from './styles';

const ItemsProducts = () => {
  const [products, setProducts] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    const GetProducts = () => {
      api.get('/products').then((response) => setProducts(response.data));
    };

    const GetCategory = () => {
      api.get('/category').then((response) => setCategoryNames(response.data));
    };

    GetProducts();
    GetCategory();
  }, []);

  return (
    <>
      <NavCategory>
        <ul>
          <li>Todos</li>
          {categoryNames &&
            categoryNames.map((category) => <li>{category.name}</li>)}
        </ul>
      </NavCategory>
      <AllProducts>
        {products &&
          products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </AllProducts>
    </>
  );
};

export default ItemsProducts;
