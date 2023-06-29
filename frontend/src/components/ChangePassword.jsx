import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

function ChangePassword() {
    const [oldInputpassword, setOldInputpassword] = useState("");
    const [oldpassword, setOldpassword] = useState("");
    const [password, setPassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const token = sessionStorage["token"];
    const navigate=useNavigate();

    console.log(oldpassword);
    console.log(oldInputpassword);
    console.log(password);
    console.log(confirmpassword);
    const loadPassword = () => {
        if (!token) {
            alert("Please login");
            navigate('/login')
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
                    setOldpassword(data.password);
                }
            })
    }
    useEffect(() => {
        loadPassword();
    }, [])
    const onSave = () => {
        if (!token) {
            alert("Token missing");
        } else if (password !== confirmpassword) {
            alert("New password does not match");
        } else if (oldpassword !== oldInputpassword) {
            alert("please check password");
        } else {
            axios.put('http://localhost:4500/user/changePassword',{password},{
                headers: {
                    "x-token": token,
                },
            })
                .then(response => {
                    const result = response.data;
                    console.log(result);
                    if (result["status"] === "success") {
                        alert("Password successfully changed");
                        navigate("/");
                    }
                })
        }

    }

    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h2 className="heading">Change Password</h2>
                    <div className="password">
                        <div className="passwordWrapper mb-3">
                            <div className="form-group mb-3">
                                <label htmlFor="">Old Password : </label>
                                <input type="password" onChange={(e) => setOldInputpassword(e.target.value)} className="form-control" />
                            </div>
                            <div className="new-password mb-3">
                                <div className="form-group">
                                    <label htmlFor="">New Password : </label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group" style={{ marginLeft: 10 }}>
                                    <label htmlFor="">Confirm Password : </label>
                                    <input type="password" onChange={(e) => setConfirmpassword(e.target.value)} className="form-control" />
                                </div>
                            </div>
                            <div className="changePassword-btn">
                                <button className="btn btn-success" onClick={onSave}>Save</button>
                                <button className="btn btn-danger">Cancle</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default ChangePassword;