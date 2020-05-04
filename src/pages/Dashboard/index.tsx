import React, { useState, useEffect } from "react";
import { FiMenu, FiUser, FiImage, FiThumbsUp, FiX } from "react-icons/fi";

import api from "../../services/api";
import formatValue from "../../utils/formatValue";

import { Header, Container, Content } from "./styles";
import ShoppingCart from "../../components/ShoppingCart";

interface Category {
    id: number;
    title: string;
    description: string;
}

interface Product {
    id: number;
    category_id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    current_stock: number;
}

const Dashboard: React.FC = (props: any) => {
    const [isVisibledCart, setIsvisibledCart] = useState(false);
    const [isVisibledProduct, setIsvisibledProduct] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const id = props.match.params.id;

    function handleOpenProduct(event: any) {
        event.preventDefault();
        isVisibledProduct
            ? setIsvisibledProduct(false)
            : setIsvisibledProduct(true);
    }

    useEffect(() => {
        async function getCategories(): Promise<void> {
            const response = await api.get("/products/categories");
            setCategories(response.data.categories);
        }
        getCategories();
    }, [setCategories]);

    useEffect(() => {
        async function getProducts(): Promise<void> {
            const response = await api.get(`/products/owner/${id}`);
            setProducts(response.data.products);
        }
        getProducts();
    }, [setProducts]);

    return (
        <>
            <Container isProductVisible={isVisibledProduct}>
                <div className="cover-product"></div>
                <Header>
                    <div className="menu">
                        <a href="">
                            <FiMenu size={20} />
                            Loja 1
                        </a>
                    </div>
                    <form>
                        <input placeholder="Digite o nome do produto" />
                    </form>
                    <div className="user">
                        <a href="">
                            Rodrigo <FiUser size={20} />
                        </a>
                    </div>
                </Header>
                <Content isProductVisible={isVisibledProduct}>
                    <section className="categories">
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <a href="">{category.title}</a>
                                </li>
                            ))}
                            <li>
                                <a href="" className="active">
                                    Mostrar todas as categorais
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="products">
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <a
                                        href=""
                                        onClick={(e) => handleOpenProduct(e)}
                                    >
                                        <div className="description-product">
                                            <FiImage size={100} />
                                            <h1>{product.title}</h1>
                                            <p>{product.current_stock}</p>
                                            <span>
                                                {formatValue(product.price)}
                                            </span>
                                        </div>
                                        <div className="approval">
                                            <FiThumbsUp /> 89%
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="show-detail-product">
                        <a onClick={(e) => handleOpenProduct(e)}>
                            <FiX size={30} />
                        </a>
                        <div className="show-detail-product-container">
                            <a>
                                <FiImage size={200} />
                            </a>
                            <div className="description-product">
                                <div className="approval">
                                    <FiThumbsUp /> 89% (23 pessoas)
                                </div>
                                <h1>Caixa de bombom 250g Garoto</h1>
                                <p>7 disponíveis</p>
                                <span>R$ 3,29</span>

                                <button>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </section>
                </Content>
                <ShoppingCart isVisible={isVisibledCart} />
            </Container>
        </>
    );
};

export default Dashboard;
