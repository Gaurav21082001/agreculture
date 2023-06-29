import axios from "axios";
import { useState } from "react";

function AddItem() {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


    const token = sessionStorage["token"];
    const onSubmit = () => {
        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", details);
        formdata.append("price", price);
        formdata.append("image", image);
        axios.post('http://localhost:4500/bidding/product', formdata, {
            headers: {
                "x-token": token,
            },
        }).then(response => {
            const result = response.data;
            console.log(result)
            if (result["status"] === "success") {
                alert("item added successfully");

            }
        });
    }
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <h2>Add Item</h2>
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input type="text" onChange={(e) => setDetails(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Base Price:</label>
                        <input type="number" onChange={(e) => setPrice(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Choose Image</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control" />
                    </div>
                    <button onClick={onSubmit} className="btn btn-success me-3">Submit</button>
                    <button className="btn btn-danger">Cancel</button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default AddItem;