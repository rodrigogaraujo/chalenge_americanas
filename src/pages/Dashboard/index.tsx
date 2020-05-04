import React, { useState, useEffect } from "react";
import { FiMenu, FiUser, FiImage, FiThumbsUp, FiX } from "react-icons/fi";

import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";
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
    const { user } = useAuth();

    const [isVisibledCart, setIsvisibledCart] = useState(false);
    const [isVisibledProduct, setIsvisibledProduct] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [productSafe, setProductSafe] = useState<Product>({} as Product);
    const [idStore, setIdStore] = useState(0);

    const textReplace = "/dashboard/";
    const id = props.location.pathname;

    function handleOpenProduct(event: any, product: Product) {
        event.preventDefault();
        if (isVisibledProduct) {
            setIsvisibledProduct(false);
            setProductSafe({} as Product);
        } else {
            setIsvisibledProduct(true);
            setProductSafe(product);
        }
    }

    async function handleOpenProductSelect(event: any, product: Product) {
        event.preventDefault();
        const data = {
            client_id: user?.id,
            store_id: idStore,
            product_id: product.id,
            quantity: 1,
        };
        const response = await api.post("cart/add", data);
        if (response.status) {
            alert("Produto adicionado ao seu carrinho");
        } else {
            alert("Houve um erro, tente novamente mais tarde");
        }
        setIdStore(id.substring(id.indexOf("/") + textReplace.length));
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
            const response = await api.get(
                `/products/owner/${id.substring(
                    id.indexOf("/") + textReplace.length,
                )}`,
            );
            setProducts(response.data.products);
            setIdStore(id.substring(id.indexOf("/") + textReplace.length));
        }
        getProducts();
    }, [setProducts, setIdStore]);

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
                            {products.map(
                                (product) =>
                                    product.current_stock > 0 && (
                                        <li key={product.id}>
                                            <a
                                                href=""
                                                onClick={(e) =>
                                                    handleOpenProduct(
                                                        e,
                                                        product,
                                                    )
                                                }
                                            >
                                                <div className="description-product">
                                                    <FiImage size={100} />
                                                    <h1>{product.title}</h1>
                                                    <p>
                                                        {product.current_stock}
                                                    </p>
                                                    <span>
                                                        {formatValue(
                                                            product.price,
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="approval">
                                                    <FiThumbsUp /> 89%
                                                </div>
                                            </a>
                                        </li>
                                    ),
                            )}
                        </ul>
                    </section>
                    <section className="show-detail-product">
                        <a onClick={(e) => handleOpenProduct(e, productSafe)}>
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
                                <h1>{productSafe?.title}</h1>
                                <p>
                                    {productSafe.current_stock > 1
                                        ? productSafe.current_stock +
                                          " disponíveis"
                                        : productSafe.current_stock +
                                          " disponível"}
                                </p>
                                <span> {formatValue(productSafe.price)}</span>

                                <button
                                    onClick={(e) =>
                                        handleOpenProductSelect(e, productSafe)
                                    }
                                >
                                    Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    </section>
                </Content>
                <ShoppingCart isVisible={isVisibledCart} idStore={idStore} />
            </Container>
        </>
    );
};

export default Dashboard;
