import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 10px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        top: 10px;
        right: 50px;
    }

    padding-left: 40px;
`;

export const Tiltle = styled.h2`
    font-size: 32px;
    font-weight: 900;
    color: #9758a6;
    padding-bottom: 12px;
    text-align: center;
    position: relative;
    margin-bottom: 35px;
    margin-top: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 28px);
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.$imageUrl}  ');

    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    height: 200px;
    width: 100%;
    border-radius: 20px;
    cursor: grab;

    span {
        font-weight: bold;
        font-size: 22.5px;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 30px;
        padding: 10px 10px;
        margin-top: 60px;
    }
`;
