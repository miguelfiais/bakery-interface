import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container } from './styles';

const Header = () => {
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
          <FiShoppingCart />
        </div>
      </nav>
    </Container>
  );
};

export default Header;
