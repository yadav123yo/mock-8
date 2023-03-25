
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://odd-jade-cocoon-shoe.cyclic.app/users?email=${email}&password=${password}`);
    const data = await response.json();
   
    if (data.length > 0) {
      alert("login success")
      let username = data[0].username
      localStorage.setItem("user",username)
      navigate("/movies")
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        Email : <input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        Password : <input style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
      <button style={{border:"1px solid red", padding:"5px 5px", borderRadius:"10px"}} type="submit">Log In</button> <br />
    </form>
  );
}

export default Signin;
