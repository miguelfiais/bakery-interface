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
    const cartIndex = cart.findIndex((prd) => prd.id === item.id);

    if (cartIndex >= 0) {
      productsInCart = cart;
      productsInCart[cartIndex].quantity += 1;
      setCart(productsInCart);
    } else {
      item.quantity = 1;
      productsInCart = [...cart, item];
      setCart(productsInCart);
    }
    await localStorage.setItem('bakeryCart', JSON.stringify(productsInCart));
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
