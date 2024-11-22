import React from 'react'
import { Link } from 'react-router-dom'

export default function SummaryCart({ items, amount }) {
  return (
    <div className="row g-4 justify-content-end">
                    <div className="col-8" />
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div className=" rounded carttotal">
                            <div className="p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="mb-0 me-4">Total Items:</h5>
                                    <p className="mb-0">{items}</p>
                                </div>
                                {/* <div className="d-flex justify-content-between">
                                    <h5 className="mb-0 me-4">Shipping</h5>
                                    <div className>
                                        <p className="mb-0"> 30.000 VNĐ</p>
                                    </div>
                                </div> */}
                                {/* <p className="mb-0 text-end">Shipping to Ukraine.</p> */}
                            </div>
                            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 className="mb-0 ps-4 me-4" style={{ marginLeft: '22px' }}>Total Amount :</h5>
                                <p className="mb-0 pe-4" style={{ marginRight: '21px' }}>${amount}</p>
                            </div>
                            {amount > 0 && (
                            <Link to="/checkout ">
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4 " type="button" style={{ marginLeft: '30px' }}>Proceed Checkout</button>
                            </Link>
                            )}
                        </div>
                    </div>
                </div>
  )
}
