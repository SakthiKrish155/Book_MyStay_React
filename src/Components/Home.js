import React from 'react';
import logoImage from '../Assets/Images/logo2.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <span className="app-name">SojournQuest</span>
          </div>
          <div className="container-fluid">
            <img src={logoImage} alt="Logo" className="imglogo" />
          </div>
          <ul className="user-links">
            <li className="signin"><Link to="/signin">SignIn</Link></li>
            {/* <li className="logout"><Link to="/logout">Logout</Link></li> */}
          </ul>
        </nav>
        {/* <div class = "resortdiv">
            </div> */}
      </div>
      <div>

      </div>
      <div className="home-container">
        <div className="background-image">
          {/* Add your background image here */}
        </div>
        <div className="content">
          <p class="homep">Explore the world with ease and comfort.</p>
          <p className="quote">"Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta</p>
          {/* Link to Navbar */}
        </div>
      </div>
    </>
  );
};

export default Home;
