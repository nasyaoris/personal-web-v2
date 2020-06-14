import styled from "styled-components";

export const AppContainer = styled.div`
    font-family: "Montserrat";

    .container {
        margin-top: 4rem;
        margin-left: auto;
        width: calc(100vw - 5rem);
        padding: 1.5rem;
    }

    @media screen and (max-width: 992px) {
        .container {
            margin-top: 0;
            margin-left: 0;
            width: 100%;
        }
    }
`;
