import { FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/CartContext';
import { useUser } from '../../hooks/UserContext';
import { Container, LinkStyles, Span } from './styles';

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
          <Span isActive={pathname === '/'}>
            <LinkStyles to="/">Início</LinkStyles>
          </Span>
          <Span isActive={pathname === '/produtos'}>
            <LinkStyles to="/produtos">Produtos</LinkStyles>
          </Span>
        </ul>
        <div>
          <LinkStyles to="/carrinho">
            <FiShoppingCart />
            <span>{cart.length}</span>
          </LinkStyles>
          {user ? (
            <>
              <Span isActive={pathname === '/pedidos'}>
                <LinkStyles to="/pedidos">Meus Pedidos</LinkStyles>
              </Span>
              <button className="logout" onClick={logout}>
                {user.name}
                <FiLogOut />
              </button>
            </>
          ) : (
            <Link to="/login" className="login">
              <FiUser />
              Entrar
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Header;
