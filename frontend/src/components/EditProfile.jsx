import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate,Link} from 'react-router-dom';

function EditProfile() {
    const token = sessionStorage["token"];
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const loadProfile = () => {
        if (!token) {
            alert("Please login");
            navigate('/login');
        }
        axios.get('http://localhost:4500/user/profile', {
            headers: {
                "x-token": token,
            },
        })
            .then(response => {
                const result = response.data;
                if (result["status"] === "success") {
                    const data = result["data"];
                    console.log(data);
                    setAddress(data.address);
                    setName(data.name);
                    setEmail(data.email);
                }
            });
    };
    const onSave = () => {
        if (!token) {
            alert("token missing");
        }
        axios.put('http://localhost:4500/user/editProfile',{name,email,address} ,{
            headers: {
                "x-token": token,
            },
        })
            .then(response => {
                const result = response.data;
                console.log(result)
                if (result["status"] === "success") {
                    alert("Profile edited successfully");
                    navigate("/");
                }
            });
    };

    useEffect(() => {
        loadProfile();
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h2 className="heading">Edit Profile</h2>
                    <div className="profile">
                        <div className="profileWrapper mb-3">
                            <div className="form-group mb-3">
                                <label htmlFor="">Name : </label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="">Email : </label>
                                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Address : </label>
                                <textarea rows="2" cols="20" value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className="form-control" />
                            </div>
                            {/* <div className="form-group mb-3">
                                <label htmlFor="">Choose Photo : </label>
                                <div className="profile-pic">
                                    <input type="file" className="form-control" />
                                    <button className="btn btn-info" style={{ marginLeft: 10 }}>Upload</button>
                                </div>

                            </div> */}
                            <div className="changePassword-btn">
                                <button className="btn btn-success" onClick={onSave}>Save</button>
                                <Link className="btn btn-danger" to='/'>Cancle</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default EditProfile;