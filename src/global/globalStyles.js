import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;
        font-size: 1em;
    }

    a {
        color: #225ed8;
        text-transform: none;

        &:hover {
            color: #2c5282;
        }
    }
`;
 
export default GlobalStyle;