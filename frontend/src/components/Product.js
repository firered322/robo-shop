import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Card, CardImg } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card className="my-2 p-1 rounded">
            <Link to={`/product/${product.id}`}>
                <CardImg src={`https://robohash.org/${product.id}?size=220x220`} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <h1 className="product-title">{product.title}</h1>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews}`}></Rating>
                </Card.Text>

                <Card.Text as="h4">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
