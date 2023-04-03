import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import CardProduct from '../CardProduct';
import Title from '../Title';
import { Container, ContainerProducts } from './styles';

const Highlights = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const GetProducts = () => {
      api.get('/products').then((response) => setProducts(response.data));
    };
    GetProducts();
  }, []);

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
