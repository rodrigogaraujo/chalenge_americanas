import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    > img {
        margin: 80px;
        max-height: 150px;
        max-width: 350px;
        flex: 1;
    }

    @media screen and (max-width: 840px) {
        flex-direction: column;
        > img {
            margin: 20px 0;
            max-width: 300px;
            max-height: 130px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;
    padding-top: 80px;
    @media screen and (max-width: 840px) {
        margin: 0;
        padding-top: 20px;
    }

    form {
        text-align: center;
        h1 {
            padding-bottom: 20px;
            font-size: 1.3em;
            font-weight: 400;
        }
        display: flex;
        flex-direction: column;
        width: 280px;
        input {
            border-radius: 8px;
            border: none;
            padding: 10px;
            margin-bottom: 10px;
        }

        button {
            border-radius: 8px;
            border: none;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            color: #e60014;
            background: #fff;
            font-weight: 700;
            font-size: 1.1em;
            transition: all 0.2s ease;
            &:hover {
                background: ${shade(0.1, "#fff")};
                color: #666;
            }
        }

        a {
            color: #fff;
            text-decoration: none;
            font-size: 0.9em;
        }
    }

    > a {
        margin-top: 60px;
        justify-content: flex-end;
        align-items: flex-end;
        color: #666;
        text-decoration: none;
        svg {
            padding-top: 3px;
            margin-right: 5px;
        }
    }
`;
