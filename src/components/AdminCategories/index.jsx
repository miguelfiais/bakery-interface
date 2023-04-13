import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useProduct } from '../../hooks/ProductContext';
import { api } from '../../services/api';
import { ContainerForm, FormEdit } from '../AdminProducts/styles';
import { Container } from './styles';

const AdminCategories = () => {
  const { categories, deleteCategory } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await toast.promise(
      api.put(`/category/${categoryId}`, {
        name: categoryName,
      }),
      {
        pending: 'Alterando categoria...',
        success: 'categoria alterado com sucesso',
        error: 'Falha ao alterar a categoria',
      }
    );
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="table-head">
        <p>Imagem</p>
        <p>Name</p>
        <p>Editar / Excluir</p>
      </div>
      <div className="table-body">
        {categories &&
          categories.map((category) => (
            <div key={category.id} className="tr-body">
              <img
                src={`http://localhost:3000/image/${category.path}`}
                alt=""
              />
              <p>{category.name}</p>
              <div className="delete-and-edit">
                <MdModeEdit
                  onClick={() => {
                    setCategoryName(category.name);
                    setCategoryId(category.id);
                    setIsOpen(true);
                  }}
                />
                <IoMdTrash onClick={() => deleteCategory(category.id)} />
              </div>
            </div>
          ))}
      </div>
      <ContainerForm isOpen={isOpen}>
        <FormEdit onSubmit={handleSubmit}>
          <span onClick={() => setIsOpen(false)}>X</span>
          <label>
            Nome:
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </label>
          <button type="submit">Alterar categoria</button>
        </FormEdit>
      </ContainerForm>
    </Container>
  );
};

export default AdminCategories;
