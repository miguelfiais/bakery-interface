import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a>Início</a>
          </li>
          <li>
            <a>Produtos</a>
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
