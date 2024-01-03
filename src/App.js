//import logo from './logo.svg';
//import './App.css';
import Main from "./Components/Main";
import './Assets/CSS/Main.css'
// import Home from "./Components/Home";
import './Assets/CSS/Home.css'
import SignUp from "./Components/SignUp";
import './Assets/CSS/SignUp.css'
import SignIn from "./Components/SignIn";
import './Assets/CSS/SignIn.css'
import {Routes, Route,} from 'react-router-dom';

import Form from './Components/Form';
import Himachal from "./Components/Himachal";
import HimachalHotel from "./Components/HimachalHotels";
import HimachalResorts from "./Components/HimachalResorts";
import HimachalVillas from "./Components/HimachalVillas";

// import Agra from "./Components/Agra";
// import AgraHotels from "./Components/AgraHotels";
// import AgraResorts from "./Components/AgraResorts";
// import AgraVillas from "./Components/AgraVillas";

import Bali from "./Components/Bali";
import BaliHotel from "./Components/BaliHotel";
import BaliResort from "./Components/BaliResort";
import BaliVillas from "./Components/BaliVillas";

// import Paris from "./Components/Paris";
// import ParisHotels from "./Components/ParisHotels";
// import ParisResorts from "./Components/ParisResorts";
// import ParisVillas from "./Components/ParisVillas";


// import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Main/>} />
            {/* <Route path="/main" element={<Main/>} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path = "/form" element={<Form/>}/>

            <Route path ="/himachal" element = {<Himachal/>}/>
            <Route path ="/himachalhotels" element = {<HimachalHotel/>}/>
            <Route path ="/himachalresorts" element = {<HimachalResorts/>}/>
            <Route path ="/himachalvillas" element = {<HimachalVillas/>}/>

            {/* <Route path ="/agra" element = {<Agra/>}/>
            <Route path ="/agrahotels" element = {<AgraHotels/>}/>
            <Route path ="/agraresorts" element = {<AgraResorts/>}/>
            <Route path ="/agravillas" element = {<AgraVillas/>}/> */}

            <Route path ="/bali" element = {<Bali/>}/>
            <Route path ="/balihotels" element = {<BaliHotel/>}/>
            <Route path ="/baliresorts" element = {<BaliResort/>}/>
            <Route path ="/balivillas" element = {<BaliVillas/>}/>
{/* 
            <Route path ="/paris" element = {<Paris/>}/>
            <Route path ="/parishotels" element = {<ParisHotels/>}/>
            <Route path ="/parisresorts" element = {<ParisResorts/>}/>
            <Route path ="/parisvillas" element = {<ParisVillas/>}/> */}

            <Route path="/logout" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
