import pic from './pic-1.jpg'
import service1 from './images/ser-1.jpg';
import service2 from './images/ser-2.jpg';
import service3 from './images/ser-3.jpg';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="home">
                <div className="home-wrapper">
                    <div className="home-top">
                        <div className="home-top-content">
                            <h1 >Welcome To <span style={{ color: "greenyellow" }}>AgrE-Culture</span> </h1>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem laudantium commodi autem soluta voluptatum repellat eligendi facere, harum esse! Quibusdam.</span>
                            <br />
                            <button className="home-btn">Explore now</button>
                        </div>

                    </div>
                    <div className="home-center">
                        <div className="home-services-wrapper">
                            <div className="heading">Our Services</div>
                            <div className="home-service-box">
                                <div className="box-container">
                                    <img src={service1} alt="pic-1" />
                                    <div className="title">Service 1</div>
                                    <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem!</div>

                                    <div className="serv-btn">Show More</div>
                                </div>
                                <div className="box-container text-center">
                                    <img src={service2} alt="pic-1" />
                                    <div className="title">Add product for bidding</div>
                                    <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem!</div>
                                    <div className="serv-btn">
                                        <Link className='serv-btn-link' to='/addproduct'>Show More</Link>
                                    </div>

                                </div>
                                <div className="box-container">
                                    <img src={service3} alt="pic-1" />
                                    <div className="title">Service 3</div>
                                    <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, rem!</div>
                                    <div className="serv-btn">
                                        <Link className='serv-btn-link' to='/bid_product'>Show More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home;