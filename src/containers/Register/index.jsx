import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';
import { api } from '../../services/api';
import {
    ContainerMain,
    FormWrapper,
    InputContainer,
    CampoItem,
    TextForm,
    TextFooter,
    Link,
} from './styles';

export function Register() {
    const navigate = useNavigate();
    const schema = yup
        .object({
            name: yup.string().required('Nome é obrigatório'),
            email: yup
                .string()
                .email('Digite um email válido')
                .required('Email é obrigatório'),
            password: yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Senha é obrigatória'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirmação de senha é obrigatória'),
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
            const { status } = await api.post(
                '/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,
                },
            );

            console.log('Status HTTP do cadastro:', status);

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Cadastro realizado com sucesso!');
            } else if (status === 409) {
                toast.error('Email já cadastrado!');
            } else {
                throw new Error();
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            toast.error('Falha no sistema, tente novamente mais tarde.');
        }
    };

    console.log('Erros atuais:', errors);

    return (
        <ContainerMain>
            <Logo theme="primary" />
            <FormWrapper>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <TextForm>Criar conta</TextForm>

                    <InputContainer>
                        <CampoItem>
                            <label htmlFor="input-name">Nome</label>

                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                id="input-name"
                                {...register('name')}
                            />
                            <p>{errors?.name?.message}</p>
                        </CampoItem>

                        <CampoItem>
                            <label htmlFor="input-email">Email</label>

                            <input
                                type="email"
                                placeholder="Digite seu email"
                                id="input-email"
                                {...register('email')}
                            />
                            <p>{errors?.email?.message}</p>
                        </CampoItem>

                        <CampoItem>
                            <label htmlFor="input-password">Senha</label>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                id="input-password"
                                {...register('password')}
                            />
                            <p>{errors?.password?.message}</p>
                        </CampoItem>

                        <CampoItem>
                            <label htmlFor="input-confirm-password">
                                Confirmar Senha
                            </label>
                            <input
                                type="password"
                                placeholder="Digite sua senha novamente"
                                id="input-confirm-password"
                                {...register('confirmPassword')}
                            />
                            <p>{errors?.confirmPassword?.message}</p>
                        </CampoItem>
                    </InputContainer>

                    <Button theme="secondary" type="submit">
                        CONFIRMAR CADASTRO
                    </Button>

                    <footer>
                        <TextFooter>
                            Já possui uma conta ?{' '}
                            <Link to="/login">Clique aqui</Link>
                        </TextFooter>
                    </footer>
                </form>
            </FormWrapper>
        </ContainerMain>
    );
}
