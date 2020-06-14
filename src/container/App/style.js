import styled from "styled-components";

export const AppContainer = styled.div`
    font-family: "Montserrat";

    .container {
        width: calc(100vw - 1rem);
        margin-top: 5vh;
    }

    @media screen and (max-width: 992px) {
        .container {
            margin-top: 0;
            margin-left: 0;
            width: 100%;
        }
    }
`;
