import Rating from "./Rating";
import { Card, CardImg } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card className="my-2 p-1 rounded">
            <a href={`/product/${product.id}`}>
                <CardImg src={`https://robohash.org/${product.id}?size=200x200`} variant="top" />
            </a>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <h1 className="product-title">{product.title}</h1>
                    </Card.Title>
                </a>

                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews}`}></Rating>
                </Card.Text>

                <Card.Text as="h4">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
