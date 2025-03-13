import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = async () => {
    if (!username || !password) {
      alert("Don't leave name or password blank");
      return;
    }
  
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      alert("Account created successfully!");
      navigate("/moodtracker");
    } else {
      const errorData = await response.json();
      alert(errorData.error || "Failed to create account.");
    }
  };
  
  const handleSignIn = async () => {
    if (!username || !password) {
      alert("Don't leave name or password blank");
      return;
    }
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/moodtracker");
    } else {
      const errorData = await response.json();
      alert(errorData.error || "Invalid name or password.");
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