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
      <thead>
        <tr>
          <th />
          <th>Pedidos</th>
          <th>Data dos pedidos</th>
          <th>Status </th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order) => (
            <OrderDetailsTable order={order} key={order.id} />
          ))}
      </tbody>
    </ContainerTable>
  );
};

export default UserOders;
