import cake from '../../assets/cake.png';
import { ButtonCategory, Container, ImageCategory } from './styles';

const CardCategory = () => {
  return (
    <Container>
      <ImageCategory src={cake} alt="foto-categoria" />
      <ButtonCategory>Bolos</ButtonCategory>
    </Container>
  );
};

export default CardCategory;
