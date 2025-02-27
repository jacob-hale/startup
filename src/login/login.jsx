import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Mock 
    if (!username || !password) {
      alert("Don't leave name or password blank");
      return;
    }
    const userId = `${username}_${password}`;

    const newUser = { username, password, userId };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Account created successfully!");
    navigate("/moodtracker"); 
  };

  const handleSignIn = () => {
    // Mock
    if (!username || !password) {
      alert("Don't leave name or password blank");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userId = `${username}_${password}`;
    if (storedUser && storedUser.userId === userId) {
      
      navigate("/moodtracker"); 
    } else {
      alert("Invalid name or password.");
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