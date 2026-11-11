import Cart from '../../assets/icons/cartButton.svg';
import { ContainerButton } from './styles';

export function CardButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt="carrinho-de-compras" />
        </ContainerButton>
    );
}
