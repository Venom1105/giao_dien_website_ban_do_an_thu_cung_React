import React from 'react'
import { CartContext } from '../CartContext';
import Tooltip from '@mui/material/Tooltip';

export default function OneProduct({ food, keyName }) {

     // Use Context
  const [cart, setCart] = useContext(CartContext);

  // Add to cart
  const addToCart = (foodProduct) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => foodProduct.name === item.name);
    // Condition
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...foodProduct,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    // ...

    setCart(newCart);
  };

    return (
        <div className="card">
            <img className="card-img-top" src={food.img} alt="" />
            <div className="card-body">
                <h4 className="card-title">{food.name}</h4>
                <h5>${food.price}</h5>
                <Tooltip title="Add to cart" aria-label="add to cart">
                <a onClick={() =>addToCart(food)}
                className="btn btn btn-light col-md-11 bg-warning   " href="#" type="submit">  MUA NGAY</a>
                </Tooltip>
            </div>
        </div>
    )
}
