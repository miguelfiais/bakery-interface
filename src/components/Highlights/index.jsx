import CardProduct from '../CardProduct';
import Title from '../Title';
import { Container, ContainerProducts } from './styles';

const Highlights = () => {
  return (
    <Container>
      <Title>Destaques</Title>
      <ContainerProducts>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ContainerProducts>
    </Container>
  );
};

export default Highlights;
