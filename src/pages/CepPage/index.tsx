import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "@unform/web";

import Input from "../../components/Input";
import { Container } from "./styles";

interface FormProps {
    cep: string;
}

const CepPage: React.FC = () => {
    const history = useHistory();
    function handleSubmit(data: FormProps) {
        history.push(`/stores/${data.cep}`);
    }
    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <h1>
                    Digite seu CEP para localizarmos lojas próximas ao seu
                    endereço
                </h1>
                <Input name="cep" placeholder="Seu CEP" />
                <button type="submit">Pesquisar</button>
            </Form>
        </Container>
    );
};

export default CepPage;
