import { Link as ReactLink } from 'react-router-dom';

import styled from 'styled-components';

import Background from '../../assets/backgrounds/bg.svg';

export const ContainerMain = styled.main`
    display: flex;
    min-height: 100vh;

    @media (max-width: 480px) {
        flex-direction: column;
        overflow-y: auto;
    }
`;

export const FormWrapper = styled.section`
    background:
        linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 490px;
        padding: 0 20px;

        @media (max-width: 768px) {
            position: relative;
            top: -80px;
        }
    }

    @media (max-width: 480px) {
        flex: 1;

        form {
            top: 0;
            margin-top: 60px;
            gap: 18px;
            padding: 0 16px;
            height: auto;
            justify-content: flex-start;
        }
    }

    @media (min-width: 769px) and (max-width: 1194px) {
        form {
            transform: translateY(-50px);
        }
    }
`;

export const TextForm = styled.h2`
    font-family: 'Road Rage', sans-serif;
    transform: skewX(-20deg);
    width: 100%;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
    color: #9758a6;

    @media (max-width: 480px) {
        font-size: 15px;
        margin-top: 0;
        width: 300px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;
    margin-top: 20px;
`;

export const CampoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        width: 100%;
        box-sizing: border-box;
    }

    p {
        color: #cf3057;
        font-size: 14px;
        line-height: 80%;
        font-weight: 600;
        height: 10px;
    }
`;

export const TextFooter = styled.p`
    font-weight: 700 bold;
    font-size: 18px;
    text-align: center;
    margin-top: 30px;

    a {
    }

    @media (max-width: 480px) {
        font-size: 15px;
        margin-top: 5px;
    }
`;

export const Link = styled(ReactLink)`
    color: white;
    font-weight: 600;
`;
