import styled from 'styled-components';
import img from '../../images/bannerPortfolio.jpg';
import img2 from '../../images/bannerPortfolio2.jpg';

export const Container = styled.div`
    .wallpaper {
        height: 100vh;
        background: url(${img}) no-repeat center center fixed; /*remove after*/
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
        padding: 1% 4% 1% 4%;
        font-size: 24px;
        color: cyan;
        background: none;
        border-radius: 7px;
        border: 1px solid white;
        opacity: 0.8;
    }

    .link-about:hover {
        color: cyan;
        opacity: 1;
    }

    .typewriter h1 {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        color: cyan;
        opacity: 0.8;
        animation: 
          typing 3.5s steps(40, end),
          blink-caret .75s step-end infinite;
      }
      
      /* The typing effect */
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
      }
`;