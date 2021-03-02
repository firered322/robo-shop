import { useState, useEffect } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("/api/products");
            setProducts(response.data);
        };
        fetchProducts();
    }, []);
    return (
        <div>
            <h2 style={{ color: "#f1faee" }}>Discover weird Robots</h2>
            <Row>
                {products.map((prod) => (
                    <Col sm={12} md={6} lg={4} xl={3} key={prod.id}>
                        <Product product={prod}></Product>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomeScreen;
