import styled from 'styled-components'

export const Container = styled.div`
    nav {
        width: 100%;
        height: 10vh;
        background: black;
    }

    ul {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        margin-left: auto;
    }

    li a {
        color: white;
        letter-spacing: 3px;
        font-weight: bold;
    }

    a:hover {
        color: red;
    }
`;