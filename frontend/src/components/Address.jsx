import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
function Address() {
    const navigate=useNavigate();
    const [address,setAddress]=useState("");
    const onProceed=()=>{
navigate('/order')
    };
    const token=sessionStorage["token"];

   const loadAddress=()=>{
    if(!token){
        alert("token missing");
    }
    axios.get('http://localhost:4500/user/address',{
        headers:{
            "x-token":token,
        },
    })
        .then(response=>{
            const result=response.data;
            if(result["status"]==="success"){
                const data=result["data"];
                console.log(data);
                setAddress(data)
            }
        })
   }
   useEffect(()=>{
    loadAddress();
   },[])
    
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h2 className="heading">Address</h2>
                    <div className="addressContainer">
                        <div className="addressWrapper">
                            <div className="addressTop">
                                <div className="form-group mb-3">
                                    <label className="mb-2" htmlFor=""><strong>Address :</strong> </label>
                                    {/* <textarea rows='3' cols='50' type="text" className="form-control" /> */}
                                    <div style={{marginLeft:"70px",border:"1px solid lightgray",padding:10,width:250}}>  {address.address}</div>
                                </div>
                                <Link className="address-btn" to='/editAddress' >Change</Link>
                            </div>
                            <div className="addressBottom">
                                <button className="btn btn-info" onClick={onProceed}>Proceed</button>
                                <Link className="btn btn-danger" to='/'>Cancel</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}
export default Address;