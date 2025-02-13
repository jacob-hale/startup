import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MoodTracker } from './moodtracker/moodtracker';
import { ShareLove } from './sharelove/sharelove';


export default function App() {
    return (
    <BrowserRouter>

      <div className="body">
        <header className="header">
        Mood Tracker
        </header>

          <nav>
            <NavLink  to='moodtracker'>Mood Tracker</NavLink> |
            <NavLink  to='sharelove'>Share Some Love</NavLink> |
            <a  href="https://simon.moodtracker.click">Simon</a>
          </nav>
        
  
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/moodtracker' element={<MoodTracker />} />
            <Route path='/sharelove' element={<ShareLove />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer>
        <div>Jacob Hale | <a href="https://github.com/jacob-hale/startup">My Github Repo</a></div>
        </footer>
      </div>

      </BrowserRouter>

    );
  }

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }