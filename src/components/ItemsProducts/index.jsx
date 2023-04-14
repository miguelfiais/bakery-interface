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
  const { products, categories } = useProduct();
  const [linkActive, setLinkActive] = useState(categoryName);

  let filteredCategory = [];
  filteredCategory =
    linkActive.length > 0
      ? products.filter((product) => product.Category.name.includes(linkActive))
      : (filteredCategory = products);

  return (
    <>
      <NavCategory>
        <ul>
          <Li onClick={() => setLinkActive('')} active={linkActive === ''}>
            Todos
          </Li>
          {categories &&
            categories.map((category) => (
              <Li
                key={category.id}
                onClick={() => setLinkActive(category.name)}
                active={linkActive === category.name}
              >
                {category.name}
              </Li>
            ))}
        </ul>
      </NavCategory>
      <AllProducts>
        {filteredCategory &&
          filteredCategory.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </AllProducts>
    </>
  );
};

export default ItemsProducts;
