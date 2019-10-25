import styled from 'styled-components';
import img from '../../images/bannerPortfolio.jpg';

export const Container = styled.div`
    .wallpaper {
        height: 100vh;
        background: url(${img}) no-repeat center center fixed;
        background-attachment: fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link-about {
        top: 50vh;
        position: absolute;
        padding: 1% 2% 1% 2%;
        font-size: 24px;
        background: none;
        border-radius: 15px;
        border: 1px solid white;
    }

    .link-about:hover {
        color: white;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        margin-left: auto;
        width: 35%;
        height: 10%;
        padding-top: 50px;
    }

    li a {
        color: black;
        letter-spacing: 3px;
        font-weight: bold;
        padding-bottom: 1rem;
        font-size: 20px;
    }

    a:hover {
        color: red;
        border-bottom: 2px solid red;
    }
`;