import React from 'react';
import {Card, Button, Form} from 'react-bootstrap';

import './cart.css';

const Cart = (props) => {
    const {cart, setCart, stock, setStock} = props;

    const deleteProduct = (productId, index) => {
        const newProductsList = cart.products.filter(item => item.id !== productId);
        setCart({
            products: newProductsList,
            total:  cart.total - cart.products[index].totalPrice,
        });
    };

    const changeQuantity = (item, index) => (e) => {

        const newProduct = {
            ...item,
            quantity: Number(e.target.value),
            totalPrice: Number(e.target.value)*Number(item.price)
        };
        const newTotal = cart.total - item.totalPrice + newProduct.totalPrice;
        const newProductsList = [...cart.products];
        newProductsList[index]= newProduct;

        setCart({total: newTotal, products: newProductsList});
    };

    const placeOrder = () => {
        let newStock = [...stock];
        cart.products.forEach(product => {
            const stockFoundIndex = stock.findIndex(item => item.productId === product.id);
            console.log('stockFound', stockFoundIndex);
            if (stockFoundIndex) {
                newStock[stockFoundIndex] = {
                    ...newStock[stockFoundIndex],
                    stock: newStock[stockFoundIndex].stock - product.quantity};
            }
        });
        console.log('newStock', newStock);

        setStock(newStock);
        setCart({total: 0, products: []});
    };

    const getOptions = (product) => {
       const stockFound = stock.find(item => item.productId === product.id);

       const options = [];
       if (stockFound) {
          for (let i=0; i<stockFound.stock; i++) {
              options.push(
                  <option value={i+1} selected={product.quantity === i+1}>{i+1}</option>
              );
          }
          return options;
       }
    };

    return (
        <div>
            Cart

            <Card>
                <Card.Body>{
                    cart.products.map((item, index) => (
                         <div className="product-container row">
                             <div className="col-6"> {item.name} </div>
                             <div className="col-2">
                                 <Form.Select onChange={changeQuantity(item, index)}>
                                     {getOptions(item)}
                                 </Form.Select>
                             </div>
                             <div className="col-3">{item.totalPrice} Lei</div>
                             <div className="col-1"> <Button variant="secondary" onClick={() => deleteProduct(item.id, index)}> Sterge </Button></div>
                         </div>
                        ))
                }</Card.Body>
                <Card.Footer> Total: {cart.total} Lei <Button
                    variant="primary"
                    disabled={cart.total === 0}
                    onClick={placeOrder}
                >Place order</Button></Card.Footer>
            </Card>
        </div>
    );
};

export default Cart;
