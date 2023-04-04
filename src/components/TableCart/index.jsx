import { IoMdTrash } from 'react-icons/io';
import { useCart } from '../../hooks/CartContext';
import { formartPrice } from '../../utils/utils';
import { ContainerTable } from './styles';

const TableCart = () => {
  const { cart, deleteFromCart, increaseProducts, decreaseProducts } =
    useCart();
  return (
    <ContainerTable>
      <thead>
        <tr>
          <th />
          <th>Produtos</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={`http://localhost:3000/image/${product.path}`}
                  alt="produto"
                />
              </td>
              <td>{product.name}</td>
              <td>{formartPrice(product.price)}</td>
              <td>
                <button onClick={() => increaseProducts(product.id)}>+</button>
                <span>{product.quantity}</span>
                <button onClick={() => decreaseProducts(product.id)}>-</button>
              </td>
              <td>{formartPrice(product.price * product.quantity)}</td>
              <td>
                <IoMdTrash onClick={() => deleteFromCart(product.id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </ContainerTable>
  );
};

export default TableCart;
