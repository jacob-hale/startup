import React, {useState} from 'react';
import { NavLink , useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



const handleLogin = () => {
  localStorage.setItem("user", JSON.stringify({ username, password }));
  navigate("/moodtracker");
};


  return (
    <main>
     <h3>Login</h3>
    {/* <!-- login form --> */}
     <div id="login">
        <label htmlFor="text">Name:</label>
        <input type="text" id="text" name="varText" placeholder="Your name here"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="varPassword" placeholder="Your password here" />
        <div id="buttons">
          <NavLink to="/moodtracker">
              <button type="button">Create</button>
          </NavLink>
          <NavLink to="/moodtracker">
              <button type="button">Sign in</button>
          </NavLink>
        </div>
        
        {/* <!-- <p>*checks to see if login info is in database</p> -->
        <!-- <p>*once logged in, navigates to <a href="moodtracker.html">Mood Tracker</a></p> --> */}
     </div>
    </main>
  );
}