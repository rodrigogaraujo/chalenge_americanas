import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const CepPage: React.FC = () => {
    const history = useHistory();
    function handleSubmit() {
        history.push("/stores");
    }
    return (
        <Container>
            <form>
                <h1>
                    Digite seu CEP para localizarmos lojas próximas ao seu
                    endereço
                </h1>
                <input placeholder="Seu CEP" />
                <button type="submit" onClick={(e) => handleSubmit()}>
                    Pesquisar
                </button>
            </form>
        </Container>
    );
};

export default CepPage;
