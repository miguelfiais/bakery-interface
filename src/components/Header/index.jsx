import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/CartContext';
import { Container } from './styles';

const Header = () => {
  const { cart } = useCart();
  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <a>Sobre nós</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
        <div>
          <button>Entrar</button>
          <Link to="/carrinho">
            <FiShoppingCart />
            <span>{cart.length}</span>
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
