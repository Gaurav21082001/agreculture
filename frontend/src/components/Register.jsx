import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const onSave=()=>{
        axios.post('http://localhost:4500/user/signup',{name,email,mobile,password,confirmPassword})
        .then(response=>{
            const result=response.data;
            if(result['status']==="success"){
                alert("register successfully");
            }else{
                alert('error while uploading')
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
                            <div className="heading">Signup</div>
                            <div className="form-group mb-3">
                                <label htmlFor=""><strong>Name :</strong></label>
                                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor=""><strong>Email :</strong></label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor=""><strong>Mobile Number :</strong></label>
                                <input onChange={(e)=>setMobile(e.target.value)} type="email" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor=""><strong>Password :</strong></label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="email" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor=""><strong>Confirm Password :</strong></label>
                                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="email" className="form-control" />
                            </div>
                            <div className="text-center">
                                <button onClick={onSave} className="login-btn mb-3">Register</button>
                                <span style={{display:"flex",alignItems:"center"}}>Already have account<Link to="/login" className="btn btn-link ">signin here</Link></span>
                            </div>


                        </div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Register;