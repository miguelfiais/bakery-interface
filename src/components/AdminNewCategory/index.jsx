import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { api } from '../../services/api';
import { Container, Form } from '../AdminNewProduct/styles';

const schema = yup
  .object({
    name: yup.string().required('Digite o nome da categoria'),
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
  })
  .required();

const AdminNewCategory = () => {
  const [fileName, setFileName] = useState(null);

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
    productDataFormData.append('file', data.file[0]);

    await toast.promise(api.post('category', productDataFormData), {
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

        <div>
          <label style={{ width: 301 }} className="label-file">
            {fileName || (
              <>
                <FaCloudUploadAlt />
                Carregue a imagem da categoria
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

        <button type="submit">Adicionar categoria</button>
      </Form>
    </Container>
  );
};

export default AdminNewCategory;
