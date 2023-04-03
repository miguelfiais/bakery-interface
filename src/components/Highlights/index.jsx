import { useProduct } from '../../hooks/ProductContext';
import CardProduct from '../CardProduct';
import Title from '../Title';
import { Container, ContainerProducts } from './styles';

const Highlights = () => {
  const { products } = useProduct();

  const productsOffer = products.filter((product) => product.offer);

  return (
    <Container>
      <Title>Destaques</Title>
      <ContainerProducts>
        {productsOffer &&
          productsOffer.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
      </ContainerProducts>
    </Container>
  );
};

export default Highlights;
