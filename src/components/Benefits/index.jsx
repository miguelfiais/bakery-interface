import {
  MdOutlineDeliveryDining,
  MdOutlineShoppingBag,
  MdWallet,
} from 'react-icons/md';
import { Container } from './styles';

const Benefits = () => {
  return (
    <Container>
      <div>
        <div className="benefits-header">
          <MdOutlineDeliveryDining />
          <h4>Frete Grátis</h4>
        </div>
        <p>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s
        </p>
      </div>
      <div>
        <div className="benefits-header">
          <MdOutlineShoppingBag />
          <h4>Embalagem segura</h4>
        </div>
        <p>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s
        </p>
      </div>
      <div>
        <div className="benefits-header">
          <MdWallet />
          <h4>Os melhores preços</h4>
        </div>
        <p>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s
        </p>
      </div>
    </Container>
  );
};

export default Benefits;
