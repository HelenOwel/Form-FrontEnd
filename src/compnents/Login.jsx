import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('');
        if(!email.trim() || !password.trim()){
            alert('All fields required');
            return
        }
        try{
          const response = await axios.post('http://localhost:3000/api/login', {email, password})
          if (response.status === 200){
            navigate('/')
          }
        }
        catch(err){
          setError(err.response?.data?.message || 'Login failed. Please try again.');
          console.error(err.response || err);
        }
    }
  return (
    <div className='bg-red-500 h-screen'>
       <div className=' flex items-center text-center justify-center pt-[100px]'>
       <form onSubmit={handleSubmit}  className=' border-2 border-gray-500 w-[400px] h-[300px] py-2 px-2 '>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email' className='w-[80%] my-4 py-2 bg-transparent border' /> <br />
            <input type="password" onChange={(e)=>setPassword(e.target.value)}  value={password} name="" placeholder='password' className='w-[80%] py-2 bg-transparent border'/> <br />
            <button type="submit"  className='my-2 py-2 bg-red-300 w-[80%]'>SUMBIT</button>
        </form>
       </div>
    </div>
  )
}

export default Login