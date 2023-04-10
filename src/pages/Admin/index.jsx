import React from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Container, Li } from './styles';

const Admin = () => {
  const use = localStorage.getItem('bakeryUser');
  if (!use || !JSON.parse(use).admin) {
    return <Navigate replace to="/" />;
  }

  const { pathname } = useLocation();

  return (
    <Container>
      <aside>
        <nav>
          <ul>
            <Li isActive={pathname === '/admin-pedidos'}>
              <Link to="/admin-pedidos">Pedidos</Link>
            </Li>
            <Li isActive={pathname === '/admin-produtos'}>
              <Link to="/admin-produtos">Produtos</Link>
            </Li>
            <Li isActive={pathname === '/admin-novo-produto'}>
              <Link to="/admin-novo-produto">Adicionar produto</Link>
            </Li>
            <Li isActive={pathname === '/admin-nova-categoria'}>
              <Link to="/admin-nova-categoria">Adicionar categoria</Link>
            </Li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </Container>
  );
};

export default Admin;
