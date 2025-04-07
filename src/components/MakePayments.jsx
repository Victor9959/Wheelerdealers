import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const MakePayment= () => {

    
    const {product}=useLocation().state ||{}
    const [phone,setPhone]=useState("")
    const[message,setMessage]=useState("")

    const submit =async(e)=>{
        e.preventDefault()
        setMessage("Please wait as we process!")

        const data = new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)

        const response=await axios.post(
            "https://victorngugi.pythonanywhere.com/api/mpesa_payment",
            data
        )

        setMessage(response.data.message)
    
    }
  return (
    <div>
        <nav className='m-4'>
            <Link to='/'className='btn btn-dark'>GET ALL PRODUCTS</Link>
        </nav>
        <h1>MakePayment- lipa na Mpesa</h1>
        <p>Product Name:{product.product_name}</p>
        <p>Product Cost:{product.product_cost}</p>
        <form onSubmit={submit}>
            {message}
            <br />
            <input type="text"
            placeholder='Phone Number'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
             />
             <br />
             <button className='btn btn-primary' type='submit'>Make Payment</button>
        </form>
    </div>
  )
}

export default MakePayment