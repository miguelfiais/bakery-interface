import CardCategory from '../CardCategory';
import Title from '../Title';
import { Container, ContainerCategory } from './styles';

const Categories = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <ContainerCategory>
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </ContainerCategory>
    </Container>
  );
};

export default Categories;
