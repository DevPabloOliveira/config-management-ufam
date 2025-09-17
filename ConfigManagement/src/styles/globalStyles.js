import { createGlobalStyle } from "styled-components";

const myGlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: beige;
    }

    p{
        font-size: 14px;
    }
`

export default myGlobalStyles