import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EditAddress() {
    const token=sessionStorage["token"];
    const [address,setAddress]=useState("");
    const navigate=useNavigate();
    console.log(address)
    const onSave=()=>{
        if(!token){
            alert("login please");
            navigate("/login");
        }
        axios.put('http://localhost:4500/user/editAddress',{address},{
            headers:{
                "x-token":token,
            },
        })
        .then(response=>{
            const result=response.data;
            const data=result["data"];
            console.log(data);
            if(result["status"]==="success"){
                alert("address updated successfully");
                navigate("/");
            }
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h2 className="heading">Edit Address</h2>
                
                <div className="editAddress">
                <div className="form-group mb-3">
                        <label htmlFor="">Address : </label>
                        <textarea type="text" onChange={(e)=>setAddress(e.target.value)} cols="16" className="form-control" />
                    </div>
                    <div className="changePassword-btn">
                        <button className="btn btn-success" onClick={onSave} >Save</button>
                        <Link className="btn btn-danger" to='/'>Cancle</Link>
                    </div>
                </div>
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default EditAddress;