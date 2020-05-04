import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";

import { useAuth } from "../../hooks/AuthContext";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";

import logoImg from "../../assets/logo.png";
import businessImg from "../../assets/business.png";

interface UserProps {
    email: string;
    pass: string;
}

const SignIn: React.FC = () => {
    const history = useHistory();
    const { signIn } = useAuth();
    async function handleSubmit(data: UserProps) {
        if (!!data.email && !!data.pass && (await signIn(data))) {
            history.push("/cep");
        } else {
            alert("Email ou senha incorretos");
            return;
        }
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
                    </section>
                </Background>
                <Content>
                    <div className="logo-img"></div>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <h1>Faça seu Login</h1>
                        <Input name="email" placeholder="E-mail" />
                        <Input
                            name="pass"
                            type="password"
                            placeholder="Senha"
                        />
                        <button type="submit">Entrar</button>
                        <a href="">Esqueci minha senha</a>
                    </Form>
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
