import { Container, ImageCategory, LinkCategory } from './styles';

const CardCategory = ({ category }) => {
  return (
    <Container>
      <ImageCategory
        src={`http://localhost:3000/image/${category.path}`}
        alt="foto-categoria"
      />
      <LinkCategory
        to={{ pathname: '/produtos' }}
        state={{ categoryName: category.name }}
      >
        {category.name}
      </LinkCategory>
    </Container>
  );
};

export default CardCategory;
