import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Carousel from "./Carousel"
import Footer from "./Footer"


const Getproducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate()

    const img_url = "https://victorngugi.pythonanywhere.com/static/images/"

    // function to get the products 
    const getProducts = async () => {
        setLoading("Please wait we are retriving the product...")
        try {
            const response = await axios.get(
                "https://victorngugi.pythonanywhere.com/api/get_product_details"
            )
            setProducts(response.data)
            setLoading("")

        } catch (error) {
            setLoading("")
            setError("There was an Error")
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (!products) return;

        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredProducts(filtered);


    }, [searchQuery, products])
    return (
        <div className='row'>
            <Navbar />
            <header className='App-header'>
                <h1 className=''> AUTO Bavaria</h1>

            </header>
            <Carousel />



            <h3 className='mt-5'>Available Products</h3>
            <input type="text"
                className="form-control shadow-sm p-2"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            {loading}
            {error}


            {
                filteredProducts?.map((product) => (
                    <div className='col-md-3 justify-content-center mb-4'>
                        {/* card to display a single product  */}
                        <div className='card shadow'>
                            <img
                                src={img_url + product.product_photo}

                                alt=""
                                className='mt-4 product_img'
                            />
                            <div className='card-body'>
                                <h5 className='mt-2'>
                                    {product.product_name}
                                </h5>
                                <p className='text-muted'>
                                    {product.product_description.slice(0,40)}
                                </p>
                                <b className="text-warning">
                                    {product.product_cost}
                                </b>
                                <button
                                    className='btn btn-dark mt-2 w-100'
                                    onClick={() => navigate('/MakePayment', { state: { product } })}>
                                    Purchase Now
                                </button>
                            </div>
                        </div>

                    </div>))
            }
            <Footer />

        </div>
    )
}
export default Getproducts
