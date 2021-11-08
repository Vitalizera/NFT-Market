import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    box-sizing: border-box;
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Montserrat', sans-serif;

}
a{
    text-decoration: none;
}
html,body{
   width: 100vw;
   height: 100vh;
}
`;
