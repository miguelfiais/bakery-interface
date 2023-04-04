import { useCart } from '../../hooks/CartContext';
import { formartPrice } from '../../utils/utils';
import { Container } from './styles';

const ResumeCart = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  return (
    <Container>
      <div>
        <div>
          <h3>Resumo do pedido</h3>
          <p className="products">
            Produtos <span>{formartPrice(total)}</span>
          </p>
          <p className="products">
            Frete <span>R$5,00</span>
          </p>
        </div>
        <p className="total">
          Total <span>{formartPrice(total + 5)}</span>
        </p>
      </div>
      <button>Finalizar pedido</button>
    </Container>
  );
};

export default ResumeCart;
