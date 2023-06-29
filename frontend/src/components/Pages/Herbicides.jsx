
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const Herbicides = () => {
    const [products, setProducts] = useState("");
    const [items, setItems] = useState([]);
    const token = sessionStorage["token"];
    const navigate=useNavigate();
    const { addItem } = useCart();

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

    const onAddtocart = (product) => {
        addItem(product);
      }
  
    return (
        <div>
            <div className="Insecticides">
                <div className="InsecticidesWrapper">
                    <div className="heading">Herbicides</div>
                    <div className='text-center'>
                        {
                            products && products.map((product, index) => {
                                return <div key={index} className="insecbox-container">
                                    <img src={'http://localhost:4500/' + product.image} alt="pic-1" />
                                    <h5 className="title mb-2">{product.title}</h5>
                                    <div className="details mb-2">{product.description}</div>
                                    <h4 className="price mb-2">Rs.{product.price}</h4>
                                    {/* <div onClick={(e) => handleButtonClick(product)} className="add-btn">Add to cart</div> */}
                                    <div onClick={onAddtocart(product)} className="add-btn">Add to cart</div>
                                </div>
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Herbicides;