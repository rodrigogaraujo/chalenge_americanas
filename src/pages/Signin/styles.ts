import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    > img {
        padding: 80px;
        max-width: 600px;

        @media screen and (max-width: 840px) {
            padding: 40px;
        }
    }
    .container-arround {
        display: flex;
        width: 100%;
        flex-direction: row;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 40%;
    border-left: 1px solid #ccc;

    @media screen and (max-width: 840px) {
        flex-basis: 100%;
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

            & + input {
                margin-bottom: 20px;
            }
        }

        button {
            border-radius: 8px;
            border: none;
            padding: 10px;
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
            color: #666;
            text-decoration: none;
            font-size: 0.9em;
            transition: all 0.2s ease;
            &:hover {
                color: #e60014;
            }
        }
    }

    > a {
        margin-top: 60px;
        justify-content: flex-end;
        align-items: flex-end;
        color: #666;
        text-decoration: none;
        transition: all 0.2s ease;
        svg {
            padding-top: 3px;
            margin-right: 5px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Background = styled.div`
    flex-basis: 60%;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    padding: 0 40px 40px 40px;

    @media screen and (max-width: 840px) {
        display: none;
    }

    .text-container {
        padding-left: 80px;
        line-height: 40px;
        h1 {
            padding-bottom: 30px;
        }
        h2 {
            font-size: 1.2em;
            line-height: 20px;
            padding-bottom: 30px;
        }
    }
    img {
        max-width: 170px;
        max-height: 140px;
        width: 100%;
        height: 100%;
        padding-left: 30px;
    }
`;
