import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import CardCategory from '../CardCategory';
import Title from '../Title';
import { Container, ContainerCategory } from './styles';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const GetCategories = async () => {
      await api
        .get('/category')
        .then((response) => setCategories(response.data));
    };
    GetCategories();
  }, []);

  return (
    <Container>
      <Title>Categorias</Title>
      <ContainerCategory>
        {categories &&
          categories.map((category) => (
            <CardCategory category={category} key={category.id} />
          ))}
      </ContainerCategory>
    </Container>
  );
};

export default Categories;
