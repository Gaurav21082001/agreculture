import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Bid_Products() {
    const [products, setProducts] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const token = sessionStorage["token"];
    const navigate = useNavigate();
    const loadProducts = () => {
        if (!token) {
            alert("token missing");
        }
        axios.get('http://localhost:4500/bidding/bid_product', {
            headers: {
                "x-token": token,
            },
        })
            .then(response => {
                const result = response.data;
                if (result["status"] === "success") {
                    const data = result["data"];
                    console.log(data);
                    setProducts(data);
                }
            })
    }
    useEffect(() => {
        loadProducts();
    }, [])
    return (
        <div>
            <h2 className="text-center">Products for bidding</h2>
            {
                products && products.map((product, index) => {
                    return <div key={index} className="box-container">
                        <img src={'http://localhost:4500/' + product.image} width="200px" height="200px" alt="" />
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className="">
                            <h4>{product.title}</h4>
                            <span><button className="btn btn-link" onClick={() => navigate('/bid_product_details')}>Show more</button></span>

                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default Bid_Products;