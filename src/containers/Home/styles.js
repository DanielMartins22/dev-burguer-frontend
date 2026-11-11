import styled from 'styled-components';

import BannerBurguer from '../../assets/backgrounds/banner-home.svg';
import Background from '../../assets/backgrounds/bg.svg';
export const HomeContainer = styled.main``;
export const BannerHome = styled.div`
    background: url('${BannerBurguer}');
    background-position: center;
    background-size: cover;
    height: 480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-weight: 400;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;
export const CarouselContainer = styled.section`
    background:
        linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4)),
        url(${Background});
    height: 100%;
`;
