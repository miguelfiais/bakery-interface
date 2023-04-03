import { useCart } from '../../hooks/CartContext';
import { formartPrice } from '../../utils/utils';
import {
  ButtonProduct,
  Container,
  ImageProduct,
  NameProduct,
  PriceProduct,
} from './styles';

const CardProduct = ({ product }) => {
  const { cart, setCart } = useCart();

  let productsInCart = [];
  const addToCart = async (item) => {
    productsInCart = [...cart, item];
    setCart(productsInCart);
    localStorage.setItem('bakeryCart', JSON.stringify(productsInCart));
  };

  return (
    <Container>
      <div>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{formartPrice(product.price)}</PriceProduct>
      </div>

      <ImageProduct
        src={`http://localhost:3000/image/${product.path}`}
        alt="produto"
      />
      <ButtonProduct onClick={() => addToCart(product)}>
        Peça agora
      </ButtonProduct>
    </Container>
  );
};

export default CardProduct;
