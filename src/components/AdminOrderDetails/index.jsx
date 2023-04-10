import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Button, Details } from '../AdminOrders/styles';

const AdminOrderDetails = ({ order }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="tr-body">
        <Button onClick={() => setVisible(!visible)} isVisible={visible}>
          <MdKeyboardArrowDown />
        </Button>
        <p>{order.id}</p>
        <p>{order.User.name}</p>
        <div className="select">
          <select>
            <option value="">{order.status}</option>
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
        <Details className="body-details" isVisible={visible}>
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
