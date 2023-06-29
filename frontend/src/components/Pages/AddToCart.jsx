
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import {useNavigate} from 'react-router-dom'
function AddToCart() {
 
    const navigate=useNavigate();
    // const loadCart=()=>{
    //     const token=sessionStorage["token"];
    //     if (!token) {
    //         alert("token missing");
    //         return;
    //     }
    //     axios.get('http://localhost:4500/user/addtocart', {
    //         headers: {
    //             "x-token": token,
    //         },
    //     })
    //         .then((response) => {
    //             const result = response.data;
    //             if (result["status"] === "success") {
    //                 const data = result["data"];
    //                 setItems(data);
    //                 setCounter(JSON.parseInt(data.quantity))
    //             } else {
    //                 alert("error while loading your blogs");

    //             }
    //         })
    //         .catch((error) => {
    //             console.log(`error: `, error)
    //         });
    // }
    // useEffect(() => {
    //     loadCart();
    // }, []);

    // var objects = [];
    // useEffect(() => {
    //     objects = JSON.parse(localStorage.getItem('items'));
    //     console.log(objects);
    //     // setItems(objects);
    // }, []);

    // using react-use-cart

    const { isEmpty,
        totalItems,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    console.log(items);
    // if (items.length == 0) 
    if (isEmpty) {
        return (
            <>
                <div className="text-center">
                    <h2 className="heading">Cart</h2>
                    <h3>Your cart is Empty</h3>
                </div>

            </>

        )
    }
    // const onAdd=()=>{
    //     setCounter(counter+1);
    // };
    // const onRemove=()=>{
    //     setCounter(counter-1);
    // };

    const onBuyNow=()=>{
        navigate('/address')
    }
    return (
        <div>
            <h2 className="heading">Cart</h2>
            <div className='text-center mb-3'>
                <div><strong> Cart ({totalUniqueItems}) Total Items: {totalItems}</strong> </div>
            </div>
            <table className="table table-light table-hover text-center ">
                <thead>
                    <tr>
                        <td><strong>Image</strong> </td>
                        <td><strong>Title</strong> </td>
                        <td><strong>Price per Quantity</strong> </td>
                        <td><strong>Quantity</strong> </td>
                        <td><strong>Update Quantity</strong> </td>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return <tr key={index}>
                                <td>
                                    <img src={'http://localhost:4500/'+item.image} width='100px'height='130px' alt="pic 1" />
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Quantity: ({item.quantity})</td>
                                <td>
                                    <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}>Remove Item</button>
                                </td>
                            </tr>

                        })
                    }
                </tbody>
            </table>
            <div style={{float:"right"}}>
            <div style={{fontSize: "20px", fontWeight: "600",marginRight:"20px" }}>Total Price : {cartTotal}</div>
                    
                    <button className="btn btn-danger " style={{ float: "right" }} onClick={()=>emptyCart()} >Clear Cart </button>
                   <button className="btn btn-info " style={{ float: "right",marginRight:"20px" }} onClick={onBuyNow}>Buy Now </button>
            </div>
           
        </div>

    )
}
export default AddToCart;