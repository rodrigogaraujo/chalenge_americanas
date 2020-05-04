import styled, { css } from "styled-components";

interface ContentProps {
    isProductVisible: boolean;
}

export const Container = styled.div<ContentProps>`
    width: 100%;
    margin: 0 auto;
    .cover-product {
        margin: 0;
        padding: 0;
        display: none;
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #000;
        opacity: 0.8;
        z-index: 998;
        ${(props) =>
            props.isProductVisible &&
            css`
                display: flex;
            `};
    }
`;

export const Header = styled.div`
    max-width: 1200px;
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    padding: 30px 15px;
    align-items: center;
    color: #707070;
    font-size: 1.2em;
    font-weight: 700;

    a {
        text-decoration: none;
        color: #707070;
        font-size: 1.5em;
    }

    .menu {
        flex-basis: 25%;
        display: flex;
        align-items: center;
        font-weight: 700;
        svg {
            margin-right: 10px;
        }
    }
    .user {
        flex-basis: 25%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 500;
        svg {
            margin-left: 10px;
        }
    }
    form {
        flex-basis: 50%;
        text-align: center;
        input {
            max-width: 500px;
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #707070;
            border-radius: 10px;
            font-size: 1.2em;
            color: #707070;
        }
    }
`;

export const Content = styled.div<ContentProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    transition: all 0.2s ease;

    .categories > ul {
        display: flex;
        flex-direction: row;
        li {
            margin: 20px 40px 20px 0;
            transition: all 0.2s ease;
            border-bottom: 4px solid #f6f6f6;
            a {
                text-decoration: none;
                color: #666666;
                font-size: 1.2em;
                font-weight: 500;
            }

            &:hover {
                border-bottom: 4px solid #666;
            }
        }

        .active {
            border-bottom: 4px solid #666;
        }
    }

    .products {
        margin-top: 20px;
        ul {
            display: flex;
            flex: 1;
            flex-wrap: wrap;

            li {
                a {
                    text-decoration: none;
                    color: #000;
                }
                display: flex;
                flex-basis: calc(33% - 10px);
                flex-direction: column;
                + li {
                    margin-left: 20px;
                }
                min-width: 300px;
                margin-bottom: 20px;
                padding: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                opacity: 0.7;
                transition: all 0.3s;
                .description-product {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    h1 {
                        font-size: 1.2em;
                        border-top: 1px solid #666;
                        flex: 1;
                        margin-top: 10px;
                        padding-top: 10px;
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    svg {
                        flex: 1;
                        max-width: 180px;
                        width: 100%;
                    }

                    span {
                        margin-top: 10px;
                        font-size: 1.5em;
                        font-weight: 500;
                    }
                }

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    .show-detail-product {
        display: none;
        max-width: 700px;
        min-height: 300px;
        position: relative;
        position: fixed;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        ${(props) =>
            props.isProductVisible &&
            css`
                display: flex;
                z-index: 998;
            `};
        > a {
            position: absolute;
            top: 10px;
            right: 20px;
            color: #000;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover {
                color: #e60014;
            }
        }

        .show-detail-product-container {
            display: flex;
            padding: 30px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            > svg {
                margin: 10px;
                border-right: 1px solid #666;
            }
            .description-product {
                text-align: center;
                line-height: 30px;
                display: flex;
                flex-direction: column;
                margin: 0 20px;

                .approval {
                    margin: 20px;
                }

                button {
                    margin-top: 10px;
                    border: none;
                    background: #e60014;
                    padding: 10px;
                    border-radius: 10px;
                    color: #fff;
                    font-size: 1.3em;
                    transition: all 0.3s ease;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;
