import Header from '../../components/Header';
import TableCart from '../../components/TableCart';
import { useCart } from '../../hooks/CartContext';
import { BannerCart, Container } from './styles';

const Cart = () => {
  const { cart } = useCart();
  return (
    <Container>
      <Header />
      <BannerCart />
      {cart.length ? <TableCart /> : <h2>Carrinho vazio</h2>}
    </Container>
  );
};

export default Cart;
