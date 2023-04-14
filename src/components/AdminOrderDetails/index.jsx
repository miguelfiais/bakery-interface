import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { api } from '../../services/api';
import { formatData } from '../../utils/utils';
import { Button, Details } from '../AdminOrders/styles';

const AdminOrderDetails = ({ order, statusOrder }) => {
  const [visible, setVisible] = useState(false);
  const currentStatus = statusOrder.filter((sts) => sts.value === order.status);
  const otherStatus = statusOrder.filter(
    (sts) => sts.value !== order.status && sts.value !== ''
  );

  const setNewStatus = async (id, status) => {
    await api.patch(`/orders/${id}`, { status: status.target.value });
  };

  return (
    <div>
      <div className="tr-body">
        <Button onClick={() => setVisible(!visible)} isVisible={visible}>
          <MdKeyboardArrowDown />
        </Button>
        <p>{order.id}</p>
        <p>{order.User.name}</p>
        <p>{formatData(order.created_at)}</p>
        <div className="select">
          <select onChange={(newStatus) => setNewStatus(order.id, newStatus)}>
            <option value={currentStatus[0].value}>
              {currentStatus[0].value}
            </option>
            {otherStatus &&
              otherStatus.map((stt) => (
                <option value={stt.value} key={stt.id}>
                  {stt.value}
                </option>
              ))}
          </select>
        </div>
      </div>
      <Details className="head-details" isVisible={visible}>
        <p />
        <p>Produto</p>
        <p>Categoria</p>
        <p>Quantidade</p>
      </Details>
      {order.orderOnProducts.map((ord) => (
        <Details
          className="body-details"
          isVisible={visible}
          key={Math.random()}
        >
          <img src={`http://localhost:3000/image/${ord.Product.path}`} alt="" />
          <p>{ord.Product.name}</p>
          <p>{ord.Product.Category.name}</p>
          <p>{ord.quantity}</p>
        </Details>
      ))}
    </div>
  );
};

export default AdminOrderDetails;
