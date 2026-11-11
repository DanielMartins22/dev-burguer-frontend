import styled, { css } from 'styled-components';

import BackgroundLogin from '../../assets/backgrounds/bg-login.svg';

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50%;

    ${(props) =>
        props.theme === 'primary' &&
        css`
            background-image: url(${BackgroundLogin});
            background-repeat: no-repeat;
            background-size: cover;
        `}

    ${(props) => props.theme === 'secondary' && css``}

  img {
        max-width: 50%;
        height: auto;
        display: block;
        margin: 0 auto;

        @media (max-width: 768px) {
            position: relative;
            top: -95px;
        }

        @media (max-width: 480px) {
            top: 0;
            max-width: 35%;
            height: 200px;
        }

        @media (min-width: 769px) and (max-width: 1194px) {
            transform: translateY(-40px);
        }
    }
`;
