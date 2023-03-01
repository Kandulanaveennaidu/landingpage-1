import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import Footer from "./Components/Footer"
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App = () => {
    return (
        <div>
            <Home />
            <Footer />
        </div>
    );
}
root.render(<App />);