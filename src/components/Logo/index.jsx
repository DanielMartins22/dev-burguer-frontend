import PropTypes from 'prop-types';

import LogoImg from '../../assets/logo/logo.svg';
import { ContainerLogo } from './styles';

export function Logo({ theme }) {
    return (
        <ContainerLogo theme={theme}>
            <img src={LogoImg} alt="Logo" />
        </ContainerLogo>
    );
}

Logo.propTypes = {
    theme: PropTypes.string,
};
