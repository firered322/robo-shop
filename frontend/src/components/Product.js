import { Card, CardImg } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product.id}`}>
                <CardImg src={`https://robohash.org/${product.id}`} variant="top" />
            </a>

            <Card.Body>
                <a href={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <strong>{product.title}</strong>
                    </Card.Title>
                </a>

                <Card.Text as="div">
                    <div className="my-1">
                        {product.rating} stars from {product.numReviews} ratings.
                    </div>
                </Card.Text>

                <Card.Text as="h4">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
