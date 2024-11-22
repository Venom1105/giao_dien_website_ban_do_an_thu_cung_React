import React from 'react';
import { store, add, setTotalItems, selectFilteredProducts } from "../store";
import { useSelector } from "react-redux";
import Tooltip from '@mui/material/Tooltip';

export default function Product() {

    // Select Data from redux store
    const products = useSelector(selectFilteredProducts);

    const cartProducts = products.filter((product) => product.added);
    
    store.dispatch(setTotalItems(cartProducts.length));


    return (
        <div>
            <div className="card-container">
                {products.map((product) => {
                  
                    // variables
                    let id = product.id;
                    let title = product.title;
                    let imageUrl = product.imageUrl;
                    let price = product.price;
                    return <div className="card" key={id}>
                        <img className="card-img-top" src={imageUrl} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h5>${price}</h5>
                            <Tooltip title="Add to cart" aria-label="add to cart">
                                <a onClick={() => store.dispatch(add(product))} className="btn btn btn-light col-md-11 bg-warning   " href="#" type="submit">  MUA NGAY</a>
                            </Tooltip>
                        </div>
                    </div>

                })}
            </div>
            
        </div>


    )
}
