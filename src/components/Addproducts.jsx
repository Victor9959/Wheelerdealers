import { useState } from "react";
import axios from "axios";

const Addproducts = () => {
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] =useState ("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductphoto] = useState([])

    const [message, setMessage] = useState("")
    const [loading, setloading] = useState("")
    const [error, setError] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        setloading("Please wait...")
        try {
           const data= new FormData() 
           data.append("product_name",product_name)
           data.append("product_description",product_description)
           data.append("product_cost",product_cost)
           data.append("product_photo",product_photo)

           const response=await axios.post(
            "https://Victorngugi.pythonanywhere.com/api/add_product",
            data
           )
           setloading("")
           setMessage("Product added successfully")

        } catch (error) {
            setloading("")
            setError("Failed to add product. Please try again")
            
        }
    }

    return (
        <div className="row justify-content-center mt-5">

            <div className="col-md-6 card shadow p-5">
                <h2>Upload products</h2>
                {loading}
                {message}
                {error}
                <form onSubmit={submit}>


                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="form-control"
                        value={product_name}
                        onChange={(e) => setProductName(e.target.value)}
                        required />
                    <br />
                    <input
                        type="number"
                        placeholder="Enter Product cost"
                        className="form-control"
                        value={product_cost}
                        onChange={(e) => setProductCost(e.target.value)}

                        required />
                    <br />

                    <textarea
                        placeholder="Describe your product"
                        className="form-control"
                        value={product_description}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required></textarea>

                    <br />

                    <input type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => setProductphoto(e.target.files[0])}
                        required />
                    <br />
                    <button type="submit" className="btn btn-primary">Upload product</button>
                </form>
            </div>


        </div>
    )
}

export default Addproducts