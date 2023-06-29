import { Link } from "react-router-dom"


function ProductType() {
    return (
        <div>
            <div className="productType">
                <div className="productType-wrapper">
                    <div className="heading">Our Products</div>
                    <div className="productType-list">
                        <div className="productType-list-item1 mb-5" style={{ boxShadow: "10px 10px 5px lightgreen" }}>
                            <div className="text-center">
                                <div className="type-name" style={{marginBottom:300}}>Insectisides</div>
                                <Link to="/insecticides" style={{textDecoration:"none"}} className="type-btn">View More</Link>
                            </div>

                        </div>
                        <div className="productType-list-item2 mb-5" style={{ boxShadow: "10px 10px 5px lightgreen" }}>
                            <div className="text-center">
                                <div className="type-name" style={{marginBottom:300}}>Fungicides</div>
                                <Link to="/fungicides" style={{textDecoration:"none"}} className="type-btn">View More</Link>
                            </div>
                        </div>
                        <div className="productType-list-item3 mb-5" style={{ boxShadow: "10px 10px 5px lightgreen" }}>
                            <div className="text-center">
                                <div className="type-name" style={{marginBottom:300}}>Herbicides</div>
                                <Link to="/herbicides" style={{textDecoration:"none"}}  className="type-btn">View More</Link>
                            </div>
                        </div>
                        <div className="productType-list-item4 mb-5" style={{ boxShadow: "10px 10px 5px lightgreen" }}>
                            <div className="text-center">
                                <div className="type-name"  style={{marginBottom:300}}>Plant Growth Nutritions</div>
                                <Link to="/nutritions" style={{textDecoration:"none"}}  className="type-btn">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductType