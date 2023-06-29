import { Link, useNavigate } from "react-router-dom";
import {BsCartFill} from 'react-icons/bs'
import { useCart } from "react-use-cart";
import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {
    const navigate=useNavigate();
    const {totalItems}=useCart();
    const [name,setName]=useState("");
    const onLogout=()=>{
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('token');

        navigate('/home');
    }
    const token=sessionStorage["token"];
    const loadProfile=()=>{
        if(!token){
            
        }
        axios.get('http://localhost:4500/user/profile',{
            headers:{
                "x-token":token,
            }
        })
        .then(response=>{
            const result=response.data;
            if(result["status"]==="success"){
                const data=result["data"];
                setName(data.name);
            }
        })
    }
    console.log(name)
    useEffect(()=>{
        loadProfile();
    },[])
    if (sessionStorage.length==0){
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
                    <div className="container-fluid">
                        <Link className="navbar-brand"><span style={{color:"greenyellow",fontWeight:600}}> AgrE-Culture</span> </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>
    
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }else{
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand"><span style={{color:"greenyellow"}}>AgrE-Culture</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="/add-to-cart" className="nav-link" ><BsCartFill style={{fontSize:"20px"}}/><div className="cart-number">{totalItems}</div></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome, {name}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/editProfile">Edit Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/changePassword">Change password</Link></li>
                                        <li><button className="dropdown-item" onClick={onLogout}>Logout</button></li>
                                    </ul>
                                </li>
    
    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}
export default Navbar;