import React, { ButtonHTMLAttributes, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

import { Container } from "./styles";

type ContainerProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ContainerProps> = (props) => {
    return (
        <Container className="shopping-cart" {...props}>
            <FiShoppingCart size={30} />
            <h1>Meu carrinho</h1>
        </Container>
    );
};

export default Button;
