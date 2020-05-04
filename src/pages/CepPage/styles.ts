import styled from "styled-components";
import { shade } from "polished";

import imgBack from "../../assets/multimidia.png";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    background: url(${imgBack}) no-repeat center center;

    form {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        text-align: center;
        h1 {
            font-size: 1.3em;
            padding: 30px;
        }
        input {
            padding: 15px;
            margin: 20px 0 20px 0;
            border: none;
            font-size: 1.2em;
            border-radius: 8px 0 0 8px;
            max-width: calc(70% - 20px);
            width: 100%;
        }

        button {
            border: none;
            background: #e60014;
            color: #fff;
            padding: 15px;
            border-radius: 0 8px 8px 0;
            width: 100%;
            max-width: calc(30% - 40px);
            font-size: 1.2em;
            transition: all 0.2s ease;

            &:hover {
                background: ${shade(0.2, "#e60014")};
            }
        }
    }
`;
