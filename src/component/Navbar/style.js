import styled, { keyframes } from "styled-components";

const swrilAnimation = keyframes`
 0% { transform: rotate(45deg);}
 30% { transform: rotate(90deg); height: 30vw;}
 40% { transform: rotate(45deg);}
 100% { transform: rotate(90deg); height: 30vw; }
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    top: 0;
    background-color: white;
    width: 100vw;
    height: 4rem;

    button {
        font-family: "Nanum Myeongjo";
        font-size: 20px;
        border: 2px solid #121212;
        margin-right: 5px;
        background-color: white;
        box-shadow: 8px 5px #18314f;
    }

    /* &:hover {
        .btn {
            background-color: black;
            color: white;
        }
    } */

    /* &:active {
        button {
            background-color: black;
            color: white;
        }
    } */

    .asset3 {
        z-index: 0;
        display: flex;
        position: absolute;
        justify-content: space-between;
        img {
            transform: rotate(45deg);
            animation-name: ${swrilAnimation};
            animation-duration: 8s;
            animation-iteration-count: infinite;
        }
    }

    .container {
        display: flex;
        justify-content: flex-end;
        /* position: relative;
        z-index: 1; */
    }

    @media only screen and (max-width: 600px) {
        .row {
            width: 100%;
        }

        .btn {
            margin-right: 2%;
            font-size: 3vw;
        }

        .col-sl-2 .btn {
            width: 21vw;
            font-size: 2vw;
        }
    }
`;
