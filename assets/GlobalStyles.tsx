import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'League Spartan', sans-serif;
    }

    a, button {
        font-family: 'League Spartan', sans-serif;
    }
`

export default GlobalStyles