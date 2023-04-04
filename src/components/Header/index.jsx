import { FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { Container } from './styles';

const Header = () => {
  const { cart } = useCart();
  const { user, setUser } = useUser();

  const logout = () => {
    localStorage.removeItem('bakeryUser');
    setUser();
  };

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
        </ul>
        <div>
          {user ? (
            <p className="user">
              <FiUser />
              {user.name}
            </p>
          ) : (
            <Link to="/login" className="login">
              Entrar
            </Link>
          )}
          <Link to="/carrinho">
            <FiShoppingCart />
            <span>{cart.length}</span>
          </Link>
          {user && (
            <button className="logout" onClick={logout}>
              <FiLogOut />
              Sair
            </button>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Header;
