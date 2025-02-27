import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Mock 
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Account created successfully!');
    navigate('/moodtracker'); 
  };

  const handleSignIn = () => {
    // Mock
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // alert('Sign in successful!');
      navigate('/moodtracker'); 
    } else {
      alert('Invalid name or password.');
    }
  };


  return (
    <main>
     <h3>Login</h3>
    {/* <!-- login form --> */}
     <div id="login">
        <label htmlFor="text">Name:</label>
        <input 
          type="text" 
          id="text" 
          name="varText" 
          placeholder="Your first name here"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="varPassword" 
          placeholder="Your password here" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="buttons">
          <button type="button" onClick={handleCreateAccount}>Create</button>
          <button type="button" onClick={handleSignIn}>Sign in</button>
          
        </div>
        
     </div>
    </main>
  );
}