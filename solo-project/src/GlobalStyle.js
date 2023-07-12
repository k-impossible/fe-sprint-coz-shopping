import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    }

    html {
        min-height : 100vh;
        width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
export default GlobalStyle;
