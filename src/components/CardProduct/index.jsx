import cake from '../../assets/cake.png';
import {
  ButtonProduct,
  Container,
  DescriptionProduct,
  ImageProduct,
  NameProduct,
  PriceProduct,
} from './styles';

const CardProduct = () => {
  return (
    <Container>
      <div>
        <NameProduct>Bolo de Chocolate</NameProduct>
        <PriceProduct>R$ 15,00</PriceProduct>
      </div>
      <DescriptionProduct>
        Is simply dummy text of the printing and typesetting industry. Lorem
      </DescriptionProduct>
      <ImageProduct src={cake} alt="produto" />
      <ButtonProduct>Peça agora</ButtonProduct>
    </Container>
  );
};

export default CardProduct;
