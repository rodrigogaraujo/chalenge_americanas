import styled from "styled-components";

interface ContainerProps {
    isVisible: boolean;
}

export const Container = styled.button`
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
        &:hover {
            opacity: 1;
        }

        svg {
            margin-right: 20px;
        }
        cursor: pointer;
    }
`;
