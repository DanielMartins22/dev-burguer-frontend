import DividerImg from '../../assets/icons/divider.svg';
import MenuImg from '../../assets/icons/menu.svg';
import UserImg from '../../assets/icons/user.svg';
import { Logo } from '../../components/Logo';
import { ContainerLinks, ContainerInfo } from './styles';

export function Header() {
    return (
        <header>
            <Logo theme="secondary" />

            <ContainerLinks>
                <a href="">Home</a>

                <img src={DividerImg} alt="Divider" />

                <a href="">Contatos</a>
            </ContainerLinks>

            <ContainerInfo>
                <div>
                    <img src={UserImg} alt="User" />
                    <span>Olá, John!</span>
                    <button>Sair</button>
                </div>

                <div>
                    <img src={MenuImg} alt="Menu" />
                    <button>Pedidos</button>
                </div>
            </ContainerInfo>
        </header>
    );
}
