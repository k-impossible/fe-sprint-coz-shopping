import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`
export {GlobalStyle, Row}; 
