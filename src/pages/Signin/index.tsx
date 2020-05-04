import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { Container, Content, Background } from "./styles";

import logoImg from "../../assets/logo.png";
import pictureFoodImg from "../../assets/food.png";
import businessImg from "../../assets/business.png";

const SignIn: React.FC = () => {
    const history = useHistory();
    function handleSubmit() {
        history.push("/cep");
    }

    return (
        <Container>
            <img src={logoImg} alt="Lojas Americanas" />
            <div className="container-arround">
                <Background>
                    <section className="text-container">
                        <h1>Agora ficou mais fácil</h1>
                        <h2>Escolha a loja Americanas mais próxima de você</h2>
                        <p>Faça sua compra e retire na loja escolhida</p>
                    </section>
                    <section className="images-container">
                        <img src={businessImg} alt="Lojas Americanas" />
                        <img src={pictureFoodImg} alt="Lojas Americanas" />
                    </section>
                </Background>
                <Content>
                    <div className="logo-img"></div>
                    <form>
                        <h1>Faça seu Login</h1>
                        <input placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button type="submit" onClick={(e) => handleSubmit()}>
                            Entrar
                        </button>
                        <a href="">Esqueci minha senha</a>
                    </form>
                    <Link to="/signup">
                        <FiLogIn />
                        Criar conta
                    </Link>
                </Content>
            </div>
        </Container>
    );
};

export default SignIn;
