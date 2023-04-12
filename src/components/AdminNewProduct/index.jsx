import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useProduct } from '../../hooks/ProductContext';
import { api } from '../../services/api';
import { Container, Form } from './styles';

const schema = yup
  .object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.string().required('Digite o preço do produto'),
    file: yup
      .mixed()
      .test(
        'required',
        'Carregue um arquivo',
        (value) => value && value.length > 0
      )
      .test(
        'fileSize',
        'Carregue arquivos de até 2mb',
        (value) => value && value[0]?.size <= 200000
      ),
    categoryId: yup
      .number()
      .positive('Selecione uma categoria')
      .required('Selecione uma categoria'),
  })
  .required();

const AdminNewProduct = () => {
  const [fileName, setFileName] = useState(null);
  const { categories } = useProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productDataFormData = new FormData();

    productDataFormData.append('name', data.name);
    productDataFormData.append('price', data.price);
    productDataFormData.append('file', data.file[0]);
    productDataFormData.append('categoryId', data.categoryId);

    await toast.promise(api.post('/products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao criar o produto',
    });
  };

  return (
    <Container>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome
          <input type="text" {...register('name')} />
          <p>{errors.name?.message}</p>
        </label>

        <label>
          Preço
          <input type="number" {...register('price')} />
          <p>{errors.price?.message}</p>
        </label>

        <div>
          <label className="label-file">
            {fileName || (
              <>
                <FaCloudUploadAlt />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(e) => setFileName(e.target.files[0]?.name)}
            />
          </label>
          <p>{errors.file?.message}</p>
        </div>

        <div>
          <select {...register('categoryId')}>
            <option value={-1}>Categoria...</option>
            {categories &&
              categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
          <p>{errors.categoryId?.message}</p>
        </div>

        <button type="submit">Adicionar produto</button>
      </Form>
    </Container>
  );
};

export default AdminNewProduct;
