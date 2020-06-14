import styled from "styled-components";

export const HomePagaContainer = styled.div`
    .asset1 {
        z-index: 2;
        position: relative;
        width: 20vw;
        display: flex;
        justify-content: flex-start;
    }

    .asset2 {
        display: flex;
        justify-content: flex-end;
        position: relative;
        z-index: 1;
        margin-right: -50px;
        /* .image2 {
            display: flex;
            align-items: flex-end;
        } */
    }

    .home {
        display: flex;
        justify-content: center;
        h1 {
            font-size: 55px;
        }
        .content {
            display: flex;
            flex-direction: column;

            p {
                text-align: center;
                font-size: 25px;
            }
        }
    }
`;
