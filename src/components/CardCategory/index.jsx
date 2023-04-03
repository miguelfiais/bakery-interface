import { ButtonCategory, Container, ImageCategory } from './styles';

const CardCategory = ({ category }) => {
  return (
    <Container>
      <ImageCategory
        src={`http://localhost:3000/image/${category.path}`}
        alt="foto-categoria"
      />
      <ButtonCategory>{category.name}</ButtonCategory>
    </Container>
  );
};

export default CardCategory;
