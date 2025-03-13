import React, { useState } from 'react';
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
  
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      console.log('Response status:', response.status); // Log the response status
      const data = await response.json();
      console.log('Response data:', data); // Log the response data
  
      if (response.ok) {
        alert("Account created successfully!");
        localStorage.setItem("user", JSON.stringify(data)); // Save user data to localStorage
        navigate("/moodtracker", { replace: true }); // Force navigation
      } else {
        alert(data.error || "Failed to create account.");
      }
    } catch (error) {
      console.error('Error creating account:', error); // Log any errors
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignIn = async () => {
    if (!username || !password) {
      alert("Don't leave name or password blank");
      return;
    }

    try {
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
    } catch (error) {
      console.error('Error signing in:', error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main>
      <h3>Login</h3>
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