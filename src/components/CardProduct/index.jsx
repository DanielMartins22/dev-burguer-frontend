import PropTypes from 'prop-types';

import { CardButton } from '../CardButton';
import { CardImage, Container } from './styles';

export function CardProduct({ product }) {
    console.log(product);
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <span>{product.name}</span>
                <strong>{product.currencyValue}</strong>
            </div>
            <CardButton></CardButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};
