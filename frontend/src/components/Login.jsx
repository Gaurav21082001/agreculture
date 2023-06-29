import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onLogin=()=>{
        axios.post('http://localhost:4500/user/signin',{email,password})
        .then(response=>{
            const result=response.data;
            if(result['status']==="success"){
                alert("login successfully");
                navigate("/home");
                const {name,token}=result["data"];
               sessionStorage["name"]=name;
               sessionStorage["token"]=token;
            }
        })
    }
    return (
        <div>
            <div className="login">
                <div className="login-wrapper">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col" style={{ padding: "0 30px", borderRadius: 10, marginTop: 100, border: "1px solid black", boxShadow: "10px 10px 5px lightgreen" }}>
                            <div className="heading">Login</div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Username:</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Password:</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
                            </div>
                            <div className="text-center">
                                <div className="">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label style={{ marginLeft: 10 }} className="" for="flexCheckDefault">
                                        Keep me sign in
                                    </label>
                                </div>
                                <button onClick={onLogin} className="login-btn mb-3">Login</button>
                                <Link to="/register" className="btn btn-link mb-2">Don't have account ?</Link>
                                <Link className="btn btn-link mb-2">Forget password ?</Link>
                            </div>


                        </div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login;