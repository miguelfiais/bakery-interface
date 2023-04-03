import { IoMdTrash } from 'react-icons/io';
import { useCart } from '../../hooks/CartContext';
import { formartPrice } from '../../utils/utils';
import { ContainerTable } from './styles';

const TableCart = () => {
  const { cart } = useCart();
  return (
    <ContainerTable>
      <thead>
        <tr>
          <th />
          <th>Itens</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.map((product) => (
            <tr>
              <td>
                <img
                  src={`http://localhost:3000/image/${product.path}`}
                  alt="produto"
                />
              </td>
              <td>{product.name}</td>
              <td>{formartPrice(product.price)}</td>
              <td>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </td>
              <td>1</td>
              <td>
                <IoMdTrash />
              </td>
            </tr>
          ))}
      </tbody>
    </ContainerTable>
  );
};

export default TableCart;
