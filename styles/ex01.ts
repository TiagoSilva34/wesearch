import styled from "styled-components";

export const Container = styled.div `
    display: flex !important;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form {
        width: 25%;
        padding: 12px;
        display: flex;

        input,
        select {
            width: 100%;
            padding: 8px 0;
            padding-left: 8px;
            border-radius: 4px;
            margin-right: 4px;
            border: 0;
            border: 1px solid #ddd;
        }
        

        button {
            background-color: green;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 1rem;
            padding: 0 8px;
            cursor: pointer;
        }
    }

    p {
        font-size: 1.5rem;
        color: #787070;
    }
`