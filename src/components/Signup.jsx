import {Link} from "react-router-dom"
import { useState } from "react"
import axios  from "axios"
const Signup =()=>{

    const[username,setUsername]= useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")

    const [success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const[loading,setLoading]=useState("")

    // create the function to handle the submition of data 
    const submit=async(e)=>{
        e.preventDefault();      // e.preventDefault prevents the reload of the page

        // set loading hook to show loading message 
        setLoading("please wait as we upload your data")
        try {
            // append the updated hook variables into the form data 
            const data=new FormData()
            data.append("username",username)
            data.append("email",email)
            data.append("password",password)
            data.append("phone",phone)
            
            // we use axios to post data to our backend api 
            const response=await axios.post(
                "https://Victorngugi.pythonanywhere.com/api/signup",data
            
            )
            // update the success message upon successful data submission 
            setSuccess(response.data.Success)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }
  

    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Signup</h2>
                {loading}
                {success}
                {error}

                <form onSubmit={submit}>

                    <input type='text'
                    className='form-control'
                    placeholder='Enter username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                    />
                    <br />

                 
                    <input type="email"
                    className='form-control'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                    <br />

                   
                    <input type="password"
                    className='form-control'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                     />
                     <br />

                    
                     <input type="text"
                     className='form-control'
                     placeholder='Enter phone'
                     value={phone}
                     onChange={(e)=>setPhone(e.target.value)}
                     required 
                     />
                     <br />

                  
                    
                     <button type='submit' className='btn btn-primary'>Signup</button>

                </form>
                <p>Already have an account?</p>
                <Link to='/signin'>Signin</Link>

                
            </div>
        </div>
        
    )
}
export default Signup