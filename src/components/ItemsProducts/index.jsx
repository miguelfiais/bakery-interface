import { useState } from 'react';
import { useProduct } from '../../hooks/ProductContext';
import CardProduct from '../CardProduct';
import { AllProducts, NavCategory } from './styles';

const ItemsProducts = () => {
  const [filter, setFilter] = useState('');

  const { products, categories } = useProduct();

  // eslint-disable-next-line no-console
  let filteredCategory = [];
  filteredCategory =
    filter &&
    products.filter((product) => product.Category.name.includes(filter));

  return (
    <>
      <NavCategory>
        <ul>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <li onClick={() => setFilter('')}>Todos</li>
          {categories &&
            categories.map((category) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li key={category.id} onClick={() => setFilter(category.name)}>
                {category.name}
              </li>
            ))}
        </ul>
      </NavCategory>
      <AllProducts>
        {filter.length > 0
          ? filteredCategory.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))
          : products &&
            products.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
      </AllProducts>
    </>
  );
};

export default ItemsProducts;
