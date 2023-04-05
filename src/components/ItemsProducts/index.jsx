import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProduct } from '../../hooks/ProductContext';
import CardProduct from '../CardProduct';
import { AllProducts, Li, NavCategory } from './styles';

const ItemsProducts = () => {
  const { state } = useLocation();
  let categoryName = '';
  if (state?.categoryName) {
    categoryName = state.categoryName;
  }
  const [filter, setFilter] = useState(categoryName);
  const { products, categories } = useProduct();
  const [linkActive, setLinkActive] = useState(categoryName);

  let filteredCategory = [];
  filteredCategory =
    filter &&
    products.filter((product) => product.Category.name.includes(filter));

  const filterCategory = (name) => {
    setFilter(name);
    setLinkActive(name);
  };

  return (
    <>
      <NavCategory>
        <ul>
          <Li onClick={() => filterCategory('')} active={linkActive === ''}>
            Todos
          </Li>
          {categories &&
            categories.map((category) => (
              <Li
                key={category.id}
                onClick={() => filterCategory(category.name)}
                active={linkActive === category.name}
              >
                {category.name}
              </Li>
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
