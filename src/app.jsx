import React from 'react';
import { BrowserRouter, NavLink, Route, Routes, useLocation} from 'react-router-dom';
import './app.css';
import { Login } from './login/login';
import { MoodTracker } from './moodtracker/moodtracker';
import { ShareLove } from './sharelove/sharelove';

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/'; // Check if the current path is the login page

    return (
        <div className="body">
            <header className="header">Mood Tracker</header>

            {/* Only show nav if NOT on the login page */}
            {!isLoginPage && (
                <nav>
                    <NavLink to='/moodtracker'>Mood Tracker</NavLink> |
                    <NavLink to='/sharelove'>Share Some Love</NavLink> |
                    <a href="https://simon.moodtracker.click">Simon</a>
                </nav>
            )}

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
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}