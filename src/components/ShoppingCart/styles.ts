import styled, { css } from "styled-components";

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.section<ContainerProps>`
    .shopping-cart {
        display: flex;
        opacity: 0.7;
        max-width: 400px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        margin-bottom: 10px;
        align-items: center;
        justify-content: center;

        font-weight: 500;
        color: #fff;

        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        background: #e60014;

        transition: all 0.3s ease;
        &:hover {
            opacity: 1;
        }

        svg {
            margin-right: 20px;
        }
        cursor: pointer;
        ${(props) =>
            props.isVisible &&
            css`
                display: none;
            `}
    }

    .shopping-cart-itens {
        display: none;
        ${(props) =>
            props.isVisible &&
            css`
                display: flex;
            `}
        transition: all 0.3s ease;

        flex-direction: column;
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        margin-bottom: 10px;
        align-items: center;
        justify-content: center;

        font-weight: 500;
        color: #fff;

        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        background: #e60014;

        svg {
            margin-right: 20px;
        }
        .shopping-cart-end {
            display: flex;
        }
        .show-itens-cart {
            display: flex;
            flex: 1;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            > a svg {
                position: absolute;
                top: -5px;
                right: -10px;
                cursor: pointer;
                text-decoration: none;
                color: #fff;
                transition: all 0.3s ease;

                &:hover {
                    color: #000;
                }
            }
            .shopping-cart-all-itens {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 20px;
                transition: all 0.3s ease;
                overflow: auto;
                max-height: 290px;
                ul {
                    margin: 10px;
                    li {
                        position: relative;
                        svg {
                            position: absolute;
                            top: 5px;
                            left: 90%;
                            color: black;
                            cursor: pointer;
                            opacity: 0.8;
                            transition: all 0.4 ease;

                            &:hover {
                                opacity: 1;
                            }
                        }
                        .content-product-item {
                            flex: 1;
                            border-radius: 5px;
                            background: #fff;
                            color: #666;
                            padding: 10px;
                            margin-bottom: 10px;
                            line-height: 30px;
                            h1 {
                                font-size: 1.1em;
                                color: #000;
                            }
                            p {
                                font-size: 0.9em;
                            }
                            span {
                                margin-left: 10px;
                                color: #000;
                                font-size: 1em;
                            }
                            .shopping-cart-itens-one-line {
                                display: flex;
                            }
                        }
                    }
                }
            }
        }
        button {
            background: #fff;
            color: #e60014;
            border: none;
            margin-bottom: 20px;
            width: 100%;
            padding: 10px;
            border-radius: 10px;
            font-size: 1.3em;
            transition: all 0.2s ease;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
