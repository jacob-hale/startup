import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              Mood Tracker
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="play.html">
                  Mood Tracker
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Share Some Love
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://simon.moodtracker.click">
                  Simon
                </a>
              </li>
            
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Jacob Hale | </span>
            <a className="text-reset" href="https://github.com/jacob-hale/startup">
              My Github Repo
            </a>
          </div>
        </footer>
      </div>
    );
  }