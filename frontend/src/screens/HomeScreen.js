import products from "../data";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
                {products.map((prod) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={prod}></Product>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomeScreen;
