import styled from "styled-components";

export const HomePagaContainer = styled.div`
    /* .asset1 {
        z-index: 2;
        position: absolute;
        display: flex;
        justify-content: flex-start;
    } */

    /* .header {
        z-index: 1;
        position: absolute;
        /* .asset3 {
            z-index: 0;
            display: flex;
            position: relative;
            justify-content: flex-end;
            align-items: flex-end;
        } */

    .asset2 {
        display: flex;
        justify-content: space-between;

        .img2 {
            img {
                display: flex;
                align-items: flex-end;
                transform: rotate(180deg);
            }
        }
    }

    .home {
        display: flex;
        height: 100%;
        width: calc(100vw - 15rem);
        margin-top: 25vh;
        justify-content: center;
        position: static;
        h1 {
            font-size: 55px;
            text-align: left;
        }
        .content {
            display: flex;
            flex-direction: column;

            p {
                text-align: left;
                font-size: 25px;
            }
        }
    }
`;
