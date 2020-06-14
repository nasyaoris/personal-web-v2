import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    background-color: white;
    width: 100vw;
    height: 4rem;
    z-index: 1;
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

    .container {
        display: flex;
        justify-content: flex-end;
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
