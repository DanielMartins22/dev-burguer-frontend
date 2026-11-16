import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BannerHamburguer from '../../assets/backgrounds/banner-menu.svg';
import Background from '../../assets/backgrounds/bg.svg';

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    background:
        linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4)),
        url(${Background});
`;
export const BannerMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    position: relative;

    background: url('${BannerHamburguer}'), no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;
    width: 100%;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
        }
    }

    button {
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 10;

        background-color: rgba(151, 88, 166, 0.75);
        color: #ffffff;
        border: 1px solid rgba(151, 88, 166, 1);
        box-shadow: 0 4px 12px rgba(151, 88, 166, 0.35);

        border-radius: 20px;
        padding: 8px 18px;
        font-weight: 600;
        cursor: pointer;
        backdrop-filter: blur(4px);
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: rgba(
                151,
                88,
                166,
                1
            ); /* Fica 100% sólido no hover */
            box-shadow: 0 6px 16px rgba(151, 88, 166, 0.5);
            transform: translateY(-1px); /* Leve elevação */
        }

        &:active {
            transform: translateY(0);
        }
    }
`;
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;
