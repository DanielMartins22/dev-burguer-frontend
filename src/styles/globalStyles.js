import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    html {
        overflow-y: visible;
    }

    body {
        min-height: 100vh;
        overflow-y: auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`;

export default globalStyles;
