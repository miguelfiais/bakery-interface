import { Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import UserOrders from '../../components/UserOrders';
import { BannerOrders, Container } from './styles';

const Orders = () => {
  const user = localStorage.getItem('bakeryUser');
  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Container>
      <Header />
      <BannerOrders />
      <UserOrders />
    </Container>
  );
};

export default Orders;
