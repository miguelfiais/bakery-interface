import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { formartPrice } from '../../utils/utils';
import { TrSecondary } from './styles';

const OrderDetailsTable = ({ order }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <tr className="main-td">
        <td>
          <button className="details" onClick={() => setVisible(!visible)}>
            Detalhes <MdKeyboardArrowDown />
          </button>
        </td>
        <td>{order.id}</td>
        <td>{order.created_at}</td>
        <td>{order.status}</td>
      </tr>
      <TrSecondary isVisible={visible}>
        <th />
        <th>Produto</th>
        <th>Categoria</th>
        <th>Preço</th>
        <th>Quantidade</th>
        <th>Total</th>
      </TrSecondary>
      {order.orderOnProducts.map((ord) => (
        <TrSecondary key={Math.random()} isVisible={visible}>
          <td>
            <img
              src={`http://localhost:3000/image/${ord.Product.path}`}
              alt=""
            />
          </td>
          <td>{ord.Product.name}</td>
          <td>{ord.Product.Category.name}</td>
          <td>{formartPrice(ord.Product.price)}</td>
          <td>{ord.quantity}</td>
          <td>{formartPrice(ord.Product.price * ord.quantity)}</td>
        </TrSecondary>
      ))}
    </>
  );
};

export default OrderDetailsTable;
