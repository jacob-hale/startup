import React from 'react';

export function Login() {
  return (
    <main>
     <h3>Login</h3>
    {/* <!-- login form --> */}
     <div id="login">
        <label for="text">Name:</label>
        <input type="text" id="text" name="varText" placeholder="Your name here"/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="varPassword" placeholder="Your password here" />
        <div id="buttons">
            <a href="moodtracker.html"><button type="submit" >Create</button></a>
            <a href="moodtracker.html"><button type="submit" >Sign in</button></a>
        </div>
        
        {/* <!-- <p>*checks to see if login info is in database</p> -->
        <!-- <p>*once logged in, navigates to <a href="moodtracker.html">Mood Tracker</a></p> --> */}
     </div>
    </main>
  );
}