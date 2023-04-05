import { FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { Container, Li, LinkStyles } from './styles';

const Header = () => {
  const { cart } = useCart();
  const { user, setUser } = useUser();
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.removeItem('bakeryUser');
    setUser();
  };

  return (
    <Container>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <Li isActive={pathname === '/'}>
            <LinkStyles to="/">Início</LinkStyles>
          </Li>
          <Li isActive={pathname === '/produtos'}>
            <LinkStyles to="/produtos">Produtos</LinkStyles>
          </Li>
        </ul>
        <div>
          {user ? (
            <p className="user">
              <FiUser />
              {user.name}
            </p>
          ) : (
            <Link to="/login" className="login">
              <FiUser />
              Entrar
            </Link>
          )}
          <LinkStyles to="/carrinho">
            <FiShoppingCart />
            <span>{cart.length}</span>
          </LinkStyles>
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
