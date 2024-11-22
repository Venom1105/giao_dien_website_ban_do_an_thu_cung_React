import React, { useEffect } from 'react'
// import clearCartImage from "";


import { useSelector } from "react-redux";
import {
    store,
    remove,
    emptyCart,
    selectProducts,
    selectTotalItems,
    setTotalItems,
    selectTotalAmount,
    setTotalAmount,
    incrementProduct,
    decrementProduct,
} from '../store';
import SummaryCart from '../SummaryCart';


export default function Order() {

    // Get total Items from store
    let totalItems = useSelector(selectTotalItems);
    // Get total Amount from store
    let totalAmount = useSelector(selectTotalAmount);
    // Get products from store
    const products = useSelector(selectProducts);
    // Filter Cart products
    const cartProducts = products.filter((product) => product.added);
    // Set total Items
    store.dispatch(setTotalItems(cartProducts.length));

    // Calculate Total Amount
    let sum = cartProducts
        .map((product) => {
            let price = product.price;
            let quantity = product.quantity;
            let total = price * quantity;
            return total;
        })
        .reduce((acc, curr) => {
            return acc + curr;
        }, 0);

    // Use Effect
    useEffect(() => {
        store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
    }, [sum]);

    return (

        <div className="container-fluid py-5">
            <div className="container py-5">

                {/* Empty Cart button */}
                {cartProducts.length > 0 && (
                    <div>
                        {" "}
                        <button
                            className="clear-cart-button"
                            onClick={() => store.dispatch(emptyCart(products))}>
                            {/* <img
                                className="clear-cart-image"
                                src="./img/empty-cart.sgv"
                                alt="Empty Cart"
                                title="Empty Cart"
                            /> */}
                            <i class="bi bi-cart-x" alt="Empty Cart"
                                title="Empty Cart"></i>
                        </button>
                        <h3 className="your-products">Your Products</h3>
                    </div>
                )}

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* đọc dữ liệu (dữ liệu từ cha truyền xuống) */}
                            {products.filter((product) => product.added).map((product) => {
                                // variables
                                let id = product.id;
                                let title = product.title;
                                let imageUrl = product.imageUrl;
                                let price = product.price;
                                let quantity = product.quantity;

                                if (quantity > 0) {
                                    return (
                                        <tr key={id}>
                                            <th scope="col">
                                                <div className="d-flex align-items-center">
                                                    <img src={imageUrl} className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
                                                </div>
                                            </th>
                                            <th scope="col">
                                                <p className="mb-0 mt-4">{title}</p>
                                            </th>
                                            <th scope="col">
                                                <p className="mb-0 mt-4">${price}</p>
                                            </th>
                                            <th scope="col">
                                                <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                                    <div className="input-group-btn">
                                                        <button onClick={() => store.dispatch(decrementProduct(product))}
                                                        className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                            <i className="fa fa-minus" />
                                                        </button>
                                                    </div>
                                                    <input readOnly type="text" id="quantity" className="form-control form-control-sm text-center border-0" value={quantity} maxLength="3" />
                                                   
                                                    <div className="input-group-btn">
                                                        <button onClick={() => store.dispatch(incrementProduct(product))}
                                                            className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                            <i className="fa fa-plus" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </th>
                                            {/* <th scope="col">
                                                <p className="mb-0 mt-4">{props.giasp}</p>
                                            </th> */}
                                            <th scope="col">
                                                <button onClick={() => store.dispatch(remove(product))}
                                                    className="btn btn-md rounded-circle bg-light border mt-4">
                                                    <i className="fa fa-times text-danger" />

                                                </button>
                                            </th>
                                        </tr>
                                    )
                                }else {
                                    store.dispatch(remove(product));
                                    return null;
                                  }
                            }
                            )}
                        </tbody>
                    </table>
                </div>

                {/* <CartTotal dataToCartTotal={dataCheckout} /> */}
                <SummaryCart items={totalItems} amount={totalAmount} />

            </div>
        </div>


    )
}
