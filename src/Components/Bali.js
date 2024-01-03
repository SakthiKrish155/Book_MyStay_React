import logoImage from '../Assets/Images/logo2.png'
import { Link } from 'react-router-dom';
import BaliDashboard from './BaliDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Carousal from '../Components/Carousel-2'
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Carousel-2.css'

const Bali = () => {
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
                        <BaliDashboard />
                    </div>
                    <div class="content">
                        <p class = "himachalll">Check Out The Places to Stay!!</p>
                        <Carousal/>
                    </div>
                    <div class = "himachal">
                        <p class = "himachalp">Bali, often referred to as the "Island of the Gods," is a captivating paradise in Indonesia that weaves
                         together rich cultural heritage with breathtaking natural beauty. Known for its lush landscapes, pristine beaches, and vibrant 
                         culture, Bali invites travelers into a world of diverse experiences. From its iconic terraced rice fields in Ubud to the stunning 
                         cliffside temples overlooking the Indian Ocean, Bali's charm lies in its juxtaposition of serene spirituality and bustling energy.
                          The island offers a tapestry of experiences, from surfing along the coastlines to immersing oneself in Balinese ceremonies and 
                          dances. Balinese hospitality, mouthwatering cuisine, and an array of luxurious resorts and quaint villas complete this tropical
                           haven, making Bali an enchanting destination that captures the heart and soul of all who visit.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Bali;