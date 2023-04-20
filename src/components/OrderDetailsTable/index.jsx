import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { formartPrice, formatData } from '../../utils/utils';

import { Span, TrSecondary } from './styles';

const OrderDetailsTable = ({ order }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="head-body">
        <button onClick={() => setVisible(!visible)}>
          <Span isVisible={visible}>
            <MdKeyboardArrowDown />
          </Span>
        </button>
        <p>{order.id}</p>
        <p>{formatData(order.created_at)}</p>
        <p>{order.status}</p>
      </div>
      <TrSecondary isVisible={visible} className="title-details">
        <p />
        <p>Produto</p>
        <p>Categoria</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </TrSecondary>
      {order.orderOnProducts.map((ord) => (
        <TrSecondary
          key={Math.random()}
          isVisible={visible}
          className="content-details"
        >
          <img src={`http://localhost:3000/image/${ord.Product.path}`} alt="" />
          <p>{ord.Product.name}</p>
          <p>{ord.Product.Category.name}</p>
          <p>{formartPrice(ord.Product.price)}</p>
          <p>{ord.quantity}</p>
          <p>{formartPrice(ord.Product.price * ord.quantity)}</p>
        </TrSecondary>
      ))}
    </div>
  );
};

export default OrderDetailsTable;
