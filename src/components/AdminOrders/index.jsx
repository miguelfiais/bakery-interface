import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import AdminOrderDetails from '../AdminOrderDetails';
import { Container } from './styles';

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const { data } = await api.get('/orders');
      setAllOrders(data);
    };
    getAllOrders();
  }, []);
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a>Todos</a>
          </li>
          <li>
            <a>Pedido Realizado</a>
          </li>
          <li>
            <a>Entregue</a>
          </li>
        </ul>
      </nav>
      <div className="table">
        <div className="table-head">
          <p />
          <p>Pedido</p>
          <p>Nome do cliente</p>
          <p>Status</p>
        </div>
        <div className="table-body">
          {allOrders &&
            allOrders.map((order) => (
              <AdminOrderDetails order={order} key={order.id} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AdminOrders;
