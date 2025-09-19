import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic for login
    if(email && password){
      alert('Login successful');
      router.push('/profile'); // redirect to profile after login
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <div>
          <label>Password:</label><br/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <button type="submit" style={{padding:'10px 20px', marginTop:'10px'}}>Login</button>
      </form>
      <p style={{marginTop:'15px'}}>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
  }
