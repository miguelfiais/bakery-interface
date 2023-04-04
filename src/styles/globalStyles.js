import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
        outline: none;
    }
    button, a{
        cursor: pointer;
    }
    button:hover, a:hover{
        opacity: 0.8;
    }
    button:active, a:active{
        opacity: 0.6;
    }
    a{
        text-decoration: none;
    }
`;
