import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import {
  Container,
  InnerContainer,
  Input,
  LeftContainer,
  RightContainer,
} from '../Login/styles';

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no minimo 6 dígitos'),
    confirmPassword: yup
      .string()
      .required('Confirmar senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userData) => {
    try {
      const { status } = await api.post(
        '/user',
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        },
        { validateStatus: () => true }
      );
      if (status === 200) {
        toast.success('Cadastrado com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (status === 409) {
        toast.warn('E-mail já cadastrado!');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Problemas no servidor, tente mais tarde!');
    }
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <img src={logo} alt="" />
          <div>
            <h2>Bem vindo(a)!</h2>
            <p>Você pode entrar para acessar com sua conta existente.</p>
          </div>
        </LeftContainer>
        <RightContainer>
          <h2>Cadastra-se</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>
              Nome
              <Input
                type="text"
                {...register('name')}
                error={errors.name?.message}
              />
              <span>{errors.name?.message}</span>
            </label>
            <label>
              Email
              <Input
                type="email"
                {...register('email')}
                error={errors.email?.message}
              />
              <span>{errors.email?.message}</span>
            </label>
            <label>
              Senha
              <Input
                type="password"
                {...register('password')}
                error={errors.password?.message}
              />
              <span>{errors.password?.message}</span>
            </label>
            <label>
              Confirmar senha
              <Input
                type="password"
                {...register('confirmPassword')}
                error={errors.confirmPassword?.message}
              />
              <span>{errors.confirmPassword?.message}</span>
            </label>
            <button type="submit">Cadastrar</button>
          </form>
          <p>
            Já possui conta?
            <Link to="/login"> Entrar</Link>
          </p>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Register;
