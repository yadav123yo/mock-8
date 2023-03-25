import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, email, password };
    const response = await fetch('https://odd-jade-cocoon-shoe.cyclic.app/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
navigate("/signin")
  };

  return (
    <form onSubmit={handleSubmit}> 
        Username :<input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        Email :<input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        Password : <input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      
      <button style={{border:"1px solid red", padding:"5px 5px", borderRadius:"10px"}} type="submit">Sign Up</button> <br />
    </form>
  );
}

export default SignUp;
