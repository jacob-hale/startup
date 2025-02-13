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
            
            <menu className="navbar-nav">
              <li className="nav-item">
              <NavLink className='nav-link' to=''>Login</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className='nav-link' to='moodtracker'>MoodTracker</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className='nav-link' to='sharelove'>ShareLove</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://simon.moodtracker.click">
                  Simon
                </a>
              </li>
            
            </menu>
          </nav>
        
  
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/moodtracker' element={<MoodTracker />} />
            <Route path='/sharelove' element={<ShareLove />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Jacob Hale | </span>
            <a className="text-reset" href="https://github.com/jacob-hale/startup">
              My Github Repo
            </a>
          </div>
        </footer>
      </div>
      </BrowserRouter>

    );
  }

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }