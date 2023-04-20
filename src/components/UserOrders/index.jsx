import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import OrderDetailsTable from '../OrderDetailsTable';
import { ContainerTable } from './styles';

const UserOders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      api.get('/orders/user').then((response) => {
        setOrders(response.data);
      });
    };
    getOrders();
  }, []);

  return (
    <ContainerTable>
      <div className="thead">
        <p />
        <p>Pedidos</p>
        <p>Data do pedido</p>
        <p>Status</p>
      </div>
      <div className="tbody">
        {orders &&
          orders.map((order) => (
            <OrderDetailsTable order={order} key={order.id} />
          ))}
      </div>
    </ContainerTable>
  );
};

export default UserOders;
