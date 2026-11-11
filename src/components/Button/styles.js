import styled from 'styled-components';

export const ContainerButton = styled.button`
    padding: ${(props) =>
        props.theme === 'primary'
            ? 'initial'
            : props.theme === 'secondary'
              ? '10px'
              : 'initial'};
    width: ${(props) => (props.theme === 'secondary' ? '70%' : 'auto')};
    background: ${(props) =>
        props.theme === 'primary'
            ? 'transparent'
            : props.theme === 'secondary'
              ? '#9758A6'
              : 'none'};
    color: #ffffff;
    border: ${(props) => (props.theme === 'secondary' ? '5px' : 'none')};
    font-size: 30px;
    font-weight: 400;
    margin-top: 30px;
    transition:
        transform 0.3s ease,
        background-color 0.3s ease,
        color 0.3s ease,
        box-shadow 0.3s ease;

    span {
        font-family: 'Road Rage', sans-serif;
        display: inline-block;
        transform: ${(props) =>
            props.theme === 'primary' ? 'none' : 'skewX(-20deg)'};
    }

    &:hover {
        transform: ${(props) =>
            props.theme === 'primary'
                ? 'translateY(-5px) scale(1.05)'
                : 'translateY(0px) scale(1.02)'};

        background-color: ${(props) => (props.theme === 'primary' ? 'white' : '#b273c2')};

        color: ${(props) => (props.theme === 'primary' ? '#111' : 'white')};

        box-shadow: ${(props) =>
            props.theme === 'secondary'
                ? '0 8px 20px rgba(151, 88, 166, 0.4)'
                : 'none'};
    }

    /* ACTIVE (Clique) idêntico para ambos */
    &:active {
        transform: ${(props) =>
            props.theme === 'primary'
                ? 'translateY(-2px) scale(1.02)'
                : 'scale(0.98)'};
    }
`;
