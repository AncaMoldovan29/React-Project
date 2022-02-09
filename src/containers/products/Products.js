import React, {useEffect, useState} from "react";
import {products, categories, subcategories, CATEGORIES_DISCOUNT, PRODUCTS_DISCOUNT} from "./constants";
import {CardGroup, Card, ListGroup, Button} from "react-bootstrap";
import "./products.css";

const Products = (props) => {
    const allCategory = {
        name: "ALL",
        id: "all",
    };
    const {cart, setCart, stock} = props;

    const [user, setUser] = useState({});
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const [selectedCategory, setSelectedCategory] = useState(allCategory);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [subcategoriesData, setSubcategoriesData] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);
    useEffect(() => {
        if (selectedCategory.id === "all") {
            setFilteredProducts(products);
            setSubcategoriesData([]);
        } else {
            const filteredSubcategories = subcategories.filter(
                (subcategory) => subcategory.categoryId === selectedCategory.id
            );
            console.log("filteredSubcategories", filteredSubcategories);
            setSubcategoriesData(filteredSubcategories);
            const fProducts = products.filter((product) =>
                filteredSubcategories.find((item) => item.id === product.subcategoryId)
            );
            setFilteredProducts(fProducts);
        }
    }, [selectedCategory]);

    useEffect(() => {
        const fProducts = products.filter(
            (product) => product.subcategoryId === selectedSubcategory.id
        );
        setFilteredProducts(fProducts);
    }, [selectedSubcategory]);

    const addItemToCart = (product) => () => {
        console.log('product', product);
        let newProductsList = [...cart.products];

        const productFoundIndex = cart.products.findIndex(item => item.id === product.id);
        if (productFoundIndex === -1) {
            newProductsList.push({
                    ...product,
                    totalPrice: Number(product.price.replace(',', '.')),
                    quantity: 1,
                });
        } else {
            const newProduct = {
                ...cart.products[productFoundIndex],
                totalPrice: cart.products[productFoundIndex].totalPrice + Number(product.price),
                quantity: cart.products[productFoundIndex].quantity + 1,
            };
            newProductsList[productFoundIndex] = newProduct;
        }

        setCart({
            total: cart.total + Number(product.price.replace(',', '.')),
            products: newProductsList
        });
    };

    const getQuantity = (productId) => {
        const stockFound = stock.find(item => item.productId === productId);
        if (stockFound) {
            return stockFound.stock;
        }

        return 0;
    };

    const getProductPriceWithDiscount = (product) => {
        console.log('product', product);
        const dataWithDiscount = PRODUCTS_DISCOUNT.find(item => item.productId === product.id);
        if (dataWithDiscount) {
            if (dataWithDiscount.discount.includes('%')) {
                let discount = Number(dataWithDiscount.discount.replace('%', ''))
                return Number(product.price) * discount / 100;
            }
        }
    };

    return (
        <div className="main">
            Products
            <div>{user.email}</div>
            <div className="meniu">
                <Card style={{width: "18rem", marginRight: "2rem"}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={() => setSelectedCategory(allCategory)}>
                            {allCategory.name}
                        </ListGroup.Item>
                        {filteredCategories.map((item) => (
                            <ListGroup.Item onClick={() => setSelectedCategory(item)}>
                                {item.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>

                <Card style={{width: "10rem"}}>
                    <ListGroup variant="flush">
                        {subcategoriesData.map((item) => (
                            <ListGroup.Item onClick={() => setSelectedSubcategory(item)}>
                                {item.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </div>
            <CardGroup>
                <div className="products-grid">
                    {filteredProducts.map((item) => (
                        <Card className="product-card">
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text className="price-label">
                                    {item.price} Lei
                                </Card.Text>
                                <Card.Text className="price-label">
                                    {getProductPriceWithDiscount(item)}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <Card.Text className="price-label">
                                   Quantity: {getQuantity(item.id)}
                                </Card.Text>
                                {getQuantity(item.id) !== 0 ?
                                    <Button variant="primary"
                                            onClick={addItemToCart(item)}> Add to cart </Button>
                                    :  <Card.Text>Not in stock </Card.Text>
                                }
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </CardGroup>
        </div>
    );
};
export default Products;
