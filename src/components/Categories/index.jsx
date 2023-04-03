import { useProduct } from '../../hooks/ProductContext';
import CardCategory from '../CardCategory';
import Title from '../Title';
import { Container, ContainerCategory } from './styles';

const Categories = () => {
  const { categories } = useProduct();

  return (
    <Container>
      <Title>Categorias</Title>
      <ContainerCategory>
        {categories &&
          categories.map((category) => (
            <CardCategory category={category} key={category.id} />
          ))}
      </ContainerCategory>
    </Container>
  );
};

export default Categories;
