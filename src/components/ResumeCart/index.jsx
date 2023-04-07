import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import { formartPrice } from '../../utils/utils';
import { Container } from './styles';

const ResumeCart = () => {
  const { cart, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const total = cart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const sendOrder = async () => {
    if (user) {
      try {
        await api.post('/orders', {
          product: cart,
        });
        toast.success('Pedido realizado');
        clearCart();
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.warn('Faça login para realizar o pedido');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <Container>
      <div>
        <div>
          <h3>Resumo do pedido</h3>
          <p className="products">
            Produtos <span>{formartPrice(total)}</span>
          </p>
        </div>
        <p className="total">
          Total <span>{formartPrice(total)}</span>
        </p>
      </div>
      <button onClick={sendOrder}>Finalizar pedido</button>
    </Container>
  );
};

export default ResumeCart;
