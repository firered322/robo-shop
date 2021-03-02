import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`/api/products/${props.match.params.id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, []);
    //* we now will get the single product from the data file
    return (
        <>
            <Link className="btn my-3" style={{ backgroundColor: "#80DED9" }} to="/">
                Go Back
            </Link>
            <Row>
                <Col md={4} className="text-center">
                    <Image src={`https://robohash.org/${product.id}?size=220x220`} alt={product.title} fluid />
                </Col>
                <Col md={4} className="prodScreenInfo">
                    <ListGroup variant="flush" style={{ border: "1px solid black", width: "100%" }}>
                        <div className="px-2 py-2" style={{ borderBottom: "1px solid black" }}>
                            <h4>{product.title}</h4>
                        </div>
                        <div className="px-2 py-2" style={{ borderBottom: "1px solid black" }}>
                            <Rating value={product.rating} text={product.numReviews}></Rating>
                        </div>
                        <div className="px-2 py-2">
                            <strong>Description: </strong>
                            <p>{product.body}</p>
                        </div>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush" className="pt-4">
                        <div className="priceCartHolder">
                            <Row>
                                <Col>Price:</Col>
                                <Col>₹{product.price}</Col>
                            </Row>
                        </div>
                        <div className="priceCartHolder">
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? <span style={{ color: "#00ff00" }}>"In stock"</span> : <span style={{ color: "#ff0000" }}>"Out of stock"</span>}
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <div className="text-center">
                                <button disabled={product.countInStock === 0} className="btn" style={{ backgroundColor: "black", color: "#f1faee", width: "50%" }}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
