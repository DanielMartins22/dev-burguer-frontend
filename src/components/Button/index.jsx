import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

export function Button({ children, theme, ...rest }) {
    return (
        <ContainerButton theme={theme} {...rest}>
            <span>{children}</span>
        </ContainerButton>
    );
}

Button.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.string,
};
