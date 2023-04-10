import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import {
  Container,
  InnerContainer,
  Input,
  LeftContainer,
  RightContainer,
} from './styles';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no minimo 6 dígitos'),
  })
  .required();

const Login = () => {
  const { addUserStorage, user } = useUser();

  if (user) {
    return <Navigate replace to="/" />;
  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userData) => {
    const { data } = await toast.promise(
      api.post('/login', {
        email: userData.email,
        password: userData.password,
      }),
      {
        pending: 'Verificando seus dados',
        error: 'Verifique seu e-mail e senha 🤯',
      }
    );
    addUserStorage(data);
    if (data.admin) {
      navigate('/admin-pedidos');
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <img src={logo} alt="" />
          <div>
            <h2>Bem vindo de volta!</h2>
            <p>Você pode entrar para acessar com sua conta existente.</p>
          </div>
        </LeftContainer>
        <RightContainer>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            <button type="submit">Entrar</button>
          </form>
          <p>
            Novo usuário?
            <Link to="/cadastro"> Cadastre-se</Link>
          </p>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Login;
