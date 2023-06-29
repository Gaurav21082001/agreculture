import { useCart } from "react-use-cart";

const Order = () => {
    const { items, cartTotal } = useCart();
    return (
        <div>
            <div className="Order">
                <div className="OrderWrapper">
                    <div className="payment">
                        
                        <div className="paymentWrapper">
                            <div className="card-header">
                                <h5>Debit / Credit Card</h5>
                            </div>
                            <div className="form-group ">
                                <label htmlFor=""> Enter Card Number*</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="card-details mb-3">
                                <div className="form-group" style={{ marginRight: "10px" }}>
                                    <label htmlFor=""> Valid Date*</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group" style={{ marginRight: "10px" }}>
                                    <label htmlFor="">CVV*</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: "23px" }}>Pay Rs. {cartTotal+20}</button>
                            </div>
                            <div className="mb-3"><span >Your card details would be securely saved for faster payments. <br /> Your CVV will not be stored.</span></div>
                            <div className="form-group">
                                <div className="">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label style={{ marginLeft: 10 }} className="" for="flexCheckDefault">
                                        Net Banking
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label style={{ marginLeft: 10 }} className="" for="flexCheckDefault">
                                        Google wallet
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="your-order">
                        <div className="your-orderWrapper">
                            <div className="your-orderTop">
                                <h5>Your Order</h5>
                                <hr />
                            </div>
                            {
                                items.map((item, index) => {
                                  return  <div key={index} className="your-orderMiddle mb-3">
                                        <div style={{ marginRight: "30px", border: "1px solid gray", padding: "5px", margin: "5px",background:"lightgray",borderRadius:10}}><img src={'http://localhost:4500/'+item.image} alt="pic1" width="100px" height='100px' /></div>
                                        <div className="cart-details">
                                            <div>{item.title}</div>
                                            <div>Quantity : {item.quantity}</div>
                                            <div>Rs. {item.price}</div>
                                        </div>
                                    </div>
                                })
                            }
                            
                            <div className="your-orderBottom">
                                <div>Delivery - <span>Rs. 20(Express)</span></div>
                                <hr />
                                <div style={{fontSize:"20px"}} ><strong >Total - </strong> <span><strong>Rs. {cartTotal+20}</strong></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order;