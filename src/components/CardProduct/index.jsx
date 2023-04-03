import {
  ButtonProduct,
  Container,
  DescriptionProduct,
  ImageProduct,
  NameProduct,
  PriceProduct,
} from './styles';

const CardProduct = ({ product }) => {
  return (
    <Container>
      <div>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{product.price}</PriceProduct>
      </div>
      <DescriptionProduct>
        Is simply dummy text of the printing and typesetting industry. Lorem
      </DescriptionProduct>
      <ImageProduct
        src={`http://localhost:3000/image/${product.path}`}
        alt="produto"
      />
      <ButtonProduct>Peça agora</ButtonProduct>
    </Container>
  );
};

export default CardProduct;
