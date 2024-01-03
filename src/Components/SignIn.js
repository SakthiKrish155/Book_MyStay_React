import React, { useState } from 'react';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';
import {toast ,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

  const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const handleSignIn = (e) => {
      e.preventDefault();
      // Check credentials (demo purpose)
      if (username === 'demo' && password === 'password') {
        toast.success('Welcome👋', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 2000); 
      } else {
        toast.error('Invalid Username / Password', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    };

    return (
      <>
      <div className="signin-container">
        <div className="signin-form">
          <h1 class ="sin">Sign In</h1>
          <form onSubmit={handleSignIn}>
            <input
              type="text"
              id = "username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <input
              type="password"
              id = "password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            <br/>   
            <Link to = "/signup" element = {<SignUp/>} style={{color:"White"}}>Not Registered yet?</Link>
          </form>
          {/* {error && <p className="error-message">{error}</p>} */}
        </div>
      </div>
      <div class = "img">
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </> 
    );
  };

  export default SignIn;
