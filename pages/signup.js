import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder logic for signup
    if(name && email && phone && password){
      alert('Signup successful! You can now login.');
      router.push('/login'); // redirect to login after signup
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label><br/>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <div>
          <label>Email:</label><br/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <div>
          <label>Phone Number:</label><br/>
          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <div>
          <label>Password:</label><br/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required style={{padding:'8px', margin:'5px 0', width:'250px'}}/>
        </div>
        <button type="submit" style={{padding:'10px 20px', marginTop:'10px'}}>Sign Up</button>
      </form>
      <p style={{marginTop:'15px'}}>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
    }
