import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import AdminOrderDetails from '../AdminOrderDetails';
import { Container, Li } from './styles';

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [statusActive, setStatusActive] = useState(0);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    const getAllOrders = async () => {
      const { data } = await api.get('/orders');
      setAllOrders(data);
    };
    getAllOrders();
  }, []);

  const status = [
    { id: 0, label: 'Todos', value: '' },
    { id: 1, label: 'Pedido Realizado', value: 'Pedido Realizado' },
    { id: 2, label: 'Em preparação', value: 'Em preparação' },
    { id: 3, label: 'Pedido pronto', value: 'Pedido pronto' },
    { id: 4, label: 'Pedido á caminho', value: 'Pedido á caminho' },
    { id: 5, label: 'Pedido entregue', value: 'Pedido entregue' },
  ];

  const filteredOrder = allOrders.filter((order) =>
    order.status.includes(filterStatus)
  );

  return (
    <Container>
      <nav>
        <ul>
          {status.map((stt) => (
            <Li key={stt.id} isActive={stt.id === statusActive}>
              <button
                onClick={() => {
                  setStatusActive(stt.id);
                  setFilterStatus(stt.value);
                }}
              >
                {stt.label}
              </button>
            </Li>
          ))}
        </ul>
      </nav>
      <div className="table">
        <div className="table-head">
          <p />
          <p>Pedido</p>
          <p>Nome do cliente</p>
          <p>Data do pedido</p>
          <p>Data do pedido</p>
        </div>
        <div className="table-body">
          {filteredOrder &&
            filteredOrder.map((order) => (
              <AdminOrderDetails
                order={order}
                key={order.id}
                statusOrder={status}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default AdminOrders;
