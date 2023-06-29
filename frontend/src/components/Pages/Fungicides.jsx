
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
const Fungicides = () => {
    const [products, setProducts] = useState("");
    const [items, setItems] = useState([]);
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

    useEffect(() => {
        loadProducts();
    }, []);
    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // }, [items]);
    // const handleButtonClick = (item) => {
    //     objects = JSON.parse(localStorage.getItem('items') || "[]");
    //     console.log(objects);
    //     objects.push(item);
    //     localStorage.setItem("items", JSON.stringify(objects));
    //     setItems(items);
    // }

    const {addItem}=useCart();
    return (
        <div>
            <div className="Insecticides">
                <div className="InsecticidesWrapper">
                    <div className="heading">Fungicides</div>
                    <div className='text-center'>
                        {
                            products && products.map((product, index) => {
                                return <div key={index} className="insecbox-container">
                                    <img src={'http://localhost:4500/' + product.image} alt="pic-1" />
                                    <h5 className="title mb-2">{product.title}</h5>
                                    <div className="details mb-2">{product.description}</div>
                                    <h4 className="price mb-2">Rs.{product.price}</h4>
                                    {/* <div onClick={(e) => handleButtonClick(product)} className="add-btn">Add to cart</div> */}
                                    <div onClick={() => addItem(product)} className="add-btn">Add to cart</div>
                                </div>
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Fungicides;