import React, { ButtonHTMLAttributes, useState } from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";

import { Container } from "./styles";
import Button from "../Button";

interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isVisible: boolean;
}

const ShoppingCart: React.FC<ContainerProps> = (props) => {
    const [isButtonOpened, setButtonOpened] = useState(false);

    function handleSubmit(event: any) {
        event.preventDefault();
        isButtonOpened ? setButtonOpened(false) : setButtonOpened(true);
    }
    return (
        <Container {...props} isVisible={isButtonOpened}>
            <Button {...props} onClick={(e) => handleSubmit(e)} />
            <section className="shopping-cart-itens">
                <div className="show-itens-cart">
                    <a href="" onClick={(e) => handleSubmit(e)}>
                        <FiX size={30} />
                    </a>
                    <h1>Total de produtos (14)</h1>
                    <div className="shopping-cart-all-itens">
                        <ul>
                            <li>
                                <FiX size={25} />
                                <div className="content-product-item">
                                    <h1>Caixa de bombom garoto</h1>
                                    <div className="shopping-cart-itens-one-line">
                                        <p>Quantidade: </p>
                                        <span>2</span>
                                    </div>
                                    <div className="shopping-cart-itens-one-line">
                                        <p>Valor unitário: </p>
                                        <span>R$ 7,00</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button>Finalizar compra</button>
                    </div>
                </div>
                <div className="shopping-cart-end">
                    <FiShoppingCart size={30} />
                    <h1>Meu carrinho</h1>
                </div>
            </section>
        </Container>
    );
};

export default ShoppingCart;
