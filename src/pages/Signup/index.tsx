import React from "react";
import { FiLogIn } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
    return (
        <Container>
            <img src={logoImg} alt="Lojas Americanas" />
            <Content>
                <form>
                    <h1>Cadastre-se e seja nosso cliente</h1>
                    <input placeholder="Nome" />
                    <input placeholder="CPF" />
                    <input placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">
                    <FiLogIn />
                    Voltar para tela de login
                </Link>
            </Content>
        </Container>
    );
};

export default SignUp;
