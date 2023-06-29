
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const Insectisides = () => {
    const [products, setProducts] = useState("");
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();
    var objects = [];
    const loadProducts = () => {
        axios.get('http://localhost:4500/type/insecticides')
            .then((response) => {
                const result = response.data;
                if (result["status"] === "success") {
                    const data = result["data"];
                    setProducts(data);
                }
            })
    }

    // const onAddtocart = () => {
    //     const token = sessionStorage["token"];

    //     if (!token) {
    //         alert("token missing");
    //         return;
    //     } else {
    //         axios.post('http://localhost:4500/user/addtocart', { items }, {
    //             headers: {
    //                 "x-token": token,
    //             }
    //         })
    //             .then((response) => {
    //                 const result = response.data;
    //                 if (result["status"] === "success") {
    //                     //toast.success("Blog successfully deleted.")
    //                     alert("added successfully")
    //                 } else {
    //                     //  toast.error("error while deleting your blog");
    //                     alert("error while uploading ")
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(`error: `, error)
    //             });
    //     }
    // }

    useEffect(() => {
        loadProducts();
    }, []);


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);


    // const handleButtonClick = (item) => {
    //     // objects = JSON.parse(localStorage.getItem('items') || "[]");
    //     // console.log(objects);
    //     // objects.push(item);
    //     // localStorage.setItem("items", JSON.stringify(objects));
    //     setTitle(item.title);
    //     setDescription(item.description);
    //     setPrice(item.price);
    //     setImg(item.image);
    //     console.log("img");
    //     const token = sessionStorage["token"];
    //     const formData = new FormData();
    //     formData.append("image", img);
    //     if (!token) {
    //         alert("token missing");
    //         navigate("/login")
    //         return;
    //     } else {
    //         axios.post('http://localhost:4500/user/addtocart', { title, description, price, formData }, {
    //             headers: {
    //                 "x-token": token,
    //             }
    //         })
    //             .then((response) => {
    //                 const result = response.data;
    //                 if (result["status"] === "success") {
    //                     //toast.success("Blog successfully deleted.")
    //                     alert("added successfully");
    //                 } else {
    //                     //  toast.error("error while deleting your blog");
    //                     alert("error while uploading ");
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(`error: `, error);
    //             });
    //     }
    // }

    const {addItem}=useCart();
    return (
        <div>
            <div className="Insecticides">
                <div className="InsecticidesWrapper">
                    <div className="heading">Insecticides</div>
                    <div className='text-center'>
                        {
                            products && products.map((product, index) => {
                                return <div key={index} className="insecbox-container">
                                    <img src={'http://localhost:4500/' + product.image} alt="pic-1" />
                                    <h5 className="title mb-2">{product.title}</h5>
                                    <div className="details mb-2">{product.description}</div>
                                    <h4 className="price mb-2">Rs.{product.price}</h4>
                                    {/* second number unsuccessfull */}
                                    {/* <div onClick={(e) => handleButtonClick(product)} className="add-btn">Add to cart</div> */}
                                    <div onClick={()=>addItem(product)} className="add-btn">Add to cart</div>
                                    {/* <div onClick={onAddtocart} className="add-btn">Add to cart</div> */}
                                </div>
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Insectisides;