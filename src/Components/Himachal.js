import logoImage from '../Assets/Images/logo2.png'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Carousal from '../Components/Carosal-1'
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Carousal-1.css'

const Himachal = () => {
    return (
        <>
            <div class="main">
                <div class="navbarpage">
                    <nav class="navbarpage">
                        <img src={logoImage} alt="logo" class="logo" />
                        <div class="sqdivpage">
                            <span class="sq">SojournQuest</span>
                        </div>
                        <div class="nav-listpage">
                            <li class="signinpage" id="profile"><Link to = "/profile"><FontAwesomeIcon icon={faUser} size='2x' color='beige' /></Link></li>
                            <li class="signinpage"><Link to = "/account"><FontAwesomeIcon icon={faAddressBook} size='2x' color='beige' /></Link></li>
                            <li class="signinpage"><Link to = "/setting"><FontAwesomeIcon icon={faGear} size='2x' color='beige' /></Link></li>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="dashboard">
                        <Dashboard />
                    </div>
                    <div class="content">
                        <p class = "himachalll">Check Out The Places to Stay!!</p>
                        <Carousal/>
                    </div>
                    <div class = "himachal">
                        <p class = "himachalp">Himachal Pradesh, nestled in the lap of the majestic Himalayas, is a mesmerizing state known for its breathtaking landscapes, serene hill stations, and rich cultural heritage. 
                            It's a haven for nature lovers and adventure enthusiasts alike. The tranquil ambiance, cool mountain air, and panoramic vistas of snow-capped peaks create an otherworldly experience,
                             providing a <br/>perfect escape from the hustle and bustle of city life.Staying in Himachal Pradesh feels like a serene retreat into a world of untouched beauty. The tranquil hill stations 
                             like Shimla, Manali, and Dharamshala offer not just a place to stay but a chance to immerse oneself in the simplicity and tranquility of nature. The picturesque landscapes, lush green 
                             valleys, and the soothing melody of rivers and streams create a sense of peace and rejuvenation.The warmth of the locals, their vibrant culture, and the delectable Himachali cuisine 
                             add a unique charm to the stay. Whether it's experiencing the thrill of trekking in the Himalayas, exploring ancient temples and monasteries, or simply relaxing amidst the serene beauty, 
                             every moment spent in Himachal Pradesh feels like a blissful embrace of nature's wonders.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Himachal;