import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate, Link } from 'react-router-dom';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Passwords do not match');
      return; 
    }
 
  
    try{
      const response = await axios.post('http://localhost:3000/api/signup', {name, email, password});
      console.log("Form submitted successfully", response.data);
    alert('Signup Sucessful')
    navigate('/login')
    setError(null);
    }
    catch(error){
      console.error('signup error:', error.response?.data || error.message)
      setError(error.response?.data?.message || 'Something went wrong!');
    }
  };


  return (
    <div className='bg-red-500 h-screen'>
      <div className='flex items-center text-center justify-center pt-[100px]'>
        <form onSubmit={handleSubmit} className='border-2 border-gray-500 w-[400px] h-[300px] py-2 px-2'>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            className='w-[80%] my-4 py-2 bg-transparent border'
          /> <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-[80%] my-4 py-2 bg-transparent border'
          /> <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='w-[80%] py-2 bg-transparent border'
          /> <br />
         <div className='flex gap-5 items-center justify-center my-2 py-2'>
         <button type="submit" className='my-2 py-2 bg-red-300 w-[50%]'>Signup</button> <br />
         <Link to='/login'>LOgin</Link>
         </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
