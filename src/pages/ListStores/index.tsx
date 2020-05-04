import React, { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, Content } from "./styles";

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    document: string;
    image: string;
    is_store: boolean;
}

const ListStores: React.FC = () => {
    const [stories, setStories] = useState<User[]>([]);

    useEffect(() => {
        async function getStories(): Promise<void> {
            const response = await api.get("/users");
            setStories(response.data.users);
        }

        getStories();
    }, [setStories]);

    console.log(stories);
    return (
        <>
            <Container>
                <Content>
                    <h1>Estas são as lojas que encontramos em sua região</h1>
                    <section className="stores">
                        <ul>
                            {stories.map(
                                (storie) =>
                                    storie.is_store !== null &&
                                    storie.is_store && (
                                        <li key={storie.id}>
                                            <Link
                                                to={`/dashboard/${storie.id}`}
                                            >
                                                <div className="description-stores">
                                                    <FiImage size={100} />
                                                    <h1>{storie.name}</h1>
                                                    <p>{storie.address}</p>
                                                    <span>1 KM</span>
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
