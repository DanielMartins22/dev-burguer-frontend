import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CartImg from '../../assets/icons/cart.svg';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { api } from '../../services/api';
import {
    ContainerMain,
    FormWrapper,
    InputContainer,
    SubCamp,
    CampoItem,
    TextForm,
    TextFooter,
    Link,
} from './styles';

export function Login() {
    const navigate = useNavigate();

    const schema = yup
        .object({
            email: yup
                .string()
                .email('Digite um email válido')
                .required('Email é obrigatório'),
            password: yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Senha é obrigatória'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async (data) => {
        try {
            const {
                data: { token },
            } = await toast.promise(
                api.post('/sessions', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados...',
                    success: 'Seja bem-vindo(a)!',
                },
            );
            localStorage.setItem('token', token);

            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error('Email ou senha incorretos.');
        }
    };

    return (
        <ContainerMain>
            <Logo theme="primary" />
            <FormWrapper>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <TextForm>
                        Olá, seja bem vindo ao <span>Dev Burguer!</span>
                        <br /> Acesse com seu <span>Login e senha.</span>
                    </TextForm>

                    <InputContainer>
                        <CampoItem>
                            <SubCamp>
                                <label htmlFor="input-email">Email</label>
                                <img src={CartImg} alt="cart-icon" />
                            </SubCamp>
                            <input
                                type="email"
                                placeholder="Digite seu email"
                                id="input-email"
                                {...register('email')}
                            />
                            <p>{errors?.email?.message}</p>
                        </CampoItem>

                        <CampoItem>
                            <label htmlFor="input-senha">Senha</label>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                id="input-senha"
                                {...register('password')}
                            />
                            <p>{errors?.password?.message}</p>
                        </CampoItem>
                    </InputContainer>

                    <Button theme="primary" type="submit">
                        ENTRAR
                    </Button>

                    <footer>
                        <TextFooter>
                            Não possui uma conta ?
                            <Link to="/cadastro">Clique aqui</Link>
                        </TextFooter>
                    </footer>
                </form>
            </FormWrapper>
        </ContainerMain>
    );
}
