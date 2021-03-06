import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}


html{
    color: white;
    text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black;
    @media (max-width: 1700px){
        font-size: 75%;
    }

body {
    background-color: black;
    font-family: Pokemon, sans-serif;
    overflow-x: hidden;
}

h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }


a{
        font-size: 1.2rem;
    }

    p{
        padding: 3rem 0rem;
        font-size: 1.4rem;
        line-height: 150%;
    }


    span{
        font-weight: bold;
        color:#df3232;
    }
   

`;

export default GlobalStyle;
