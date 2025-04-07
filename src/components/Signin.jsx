import React,{useState}from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
const Signin=()=>{
    const[email, setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[loading, setLoading]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()

    const submit=async(e)=>{
        e.preventDefault ()

        setLoading("Please wait as we log you in")
        try {
            const data=new FormData()
            data.append("email",email)
            data.append("password",password)

            // post the data to signin api
            const response=await axios.post(
                "https://Victorngugi.pythonanywhere.com/api/signin",
                data
            )
            setLoading("")

            if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }
            else{
                setError(response.data.Message)
            }
        } catch (error) {
            setLoading("")
            setError(error.Message)
            
        }
    }
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign in</h2>
                {loading}
                {error}
                <form onSubmit={submit}>
                    <input 
                    type="email" 
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                    <br />
                    <input type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                    <br />
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}

export default Signin 