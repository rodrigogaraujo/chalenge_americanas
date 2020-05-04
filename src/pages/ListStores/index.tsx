import React, { useEffect, useState, useCallback } from "react";
import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";
import getDistanceF from "../../utils/getDistance";

import { Container, Content } from "./styles";

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    document: string;
    image: string;
    is_store: boolean;
    distance?: number | null;
}

const ListStores: React.FC = (props: any) => {
    console.log(props);
    const cep = props.location.pathname;
    const textReplace = "/stores/";
    const [stories, setStories] = useState<User[] | null>([]);

    const getStories = useCallback(async () => {
        const response = await api.get("/users");
        const storiesBefore: User[] = response.data.users;

        const promises = storiesBefore.map(async (storie) => {
            if (storie.is_store) {
                storie.distance = await getDistanceF(
                    cep.substring(
                        cep.indexOf(textReplace) + textReplace.length,
                    ),
                    storie.address,
                );
                return storie;
            }
            return null;
        });
        const storiesReturn = await Promise.all<User | null>(promises);
        setStories(storiesReturn as User[]);
    }, [setStories]);

    useEffect(() => {
        getStories();
    }, []);
    return (
        <>
            <Container>
                <Content>
                    <h1>Estas são as lojas que encontramos em sua região</h1>
                    <section className="stores">
                        <ul>
                            {stories &&
                                stories.map(
                                    (storie) =>
                                        storie &&
                                        storie.is_store && (
                                            <li key={storie.id}>
                                                <Link
                                                    to={`/dashboard/${storie.id}`}
                                                >
                                                    <div className="description-stores">
                                                        <FiImage size={100} />
                                                        <h1>{storie.name}</h1>
                                                        <p>{storie.address}</p>
                                                        <span id="teste">
                                                            {storie.distance} KM
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ),
                                )}
                        </ul>
                    </section>
                </Content>
            </Container>
        </>
    );
};

export default ListStores;
